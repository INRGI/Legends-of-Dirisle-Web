/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServiceClient } from "@/lib/supabase-server";
import { v4 as uuidv4 } from "uuid";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = await createSupabaseServiceClient();
  const formData = await req.formData();

  const title = formData.get("title") as string | null;
  const description = formData.get("description") as string | null;
  const price = formData.get("price")
    ? parseFloat(formData.get("price") as string)
    : null;
  const category_id = formData.get("category_id") as string | null;
  const files = formData.getAll("images") as File[] | null;

  const updates: any = {};

  if (title) updates.title = title;
  if (description) updates.description = description;
  if (price !== null) updates.price = price;
  if (category_id) updates.category_id = category_id;

  if (files && files.length > 0) {
    const uploadedUrls: string[] = [];

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const ext = file.name.split(".").pop();
      const fileName = `${uuidv4()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from(process.env.SUPABASE_BUCKET_NAME!)
        .upload(fileName, buffer, { contentType: file.type });

      if (uploadError) {
        return NextResponse.json(
          { error: uploadError.message },
          { status: 500 }
        );
      }

      const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET_NAME}/${fileName}`;
      uploadedUrls.push(publicUrl);
    }

    updates.images = uploadedUrls;
  }

  const { data, error } = await supabase
    .from("products")
    .update(updates)
    .eq("id", params.id)
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const supabase = await createSupabaseServiceClient();

  const { data: product, error: fetchError } = await supabase
    .from("products")
    .select("images")
    .eq("id", id)
    .single();

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  if (product?.images?.length) {
    const filePaths = product.images.map((url: string) => {
      const parts = url.split("/");
      return parts
        .slice(parts.indexOf(process.env.SUPABASE_BUCKET_NAME!) + 1)
        .join("/");
    });

    const { error: deleteImageError } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET_NAME!)
      .remove(filePaths);

    if (deleteImageError) {
      return NextResponse.json(
        { error: deleteImageError.message },
        { status: 500 }
      );
    }
  }

  const { error: deleteProductError } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (deleteProductError) {
    return NextResponse.json(
      { error: deleteProductError.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Product and associated images deleted successfully" },
    { status: 200 }
  );
}
