import { createSupabaseServiceClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const supabase = await createSupabaseServiceClient();

  const formData = await req.formData();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const category_id = formData.get("category_id") as string;

  const files = formData.getAll("images") as File[];

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
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET_NAME}/${fileName}`;
    uploadedUrls.push(publicUrl);
  }

  const { data, error } = await supabase
    .from("products")
    .insert({
      title,
      description,
      price,
      category_id,
      images: uploadedUrls
    })
    .select();

  if (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
