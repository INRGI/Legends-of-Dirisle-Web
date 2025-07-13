/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServiceClient } from "@/lib/supabase-server";
import { v4 as uuidv4 } from "uuid";

export async function PATCH(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const supabase = await createSupabaseServiceClient();
  const formData = await req.formData();

  const title = formData.get("title") as string | null;
  const description = formData.get("description") as string | null;
  const date = formData.get("date") as string | null;
  const fileImage = formData.get("image") as File | null;

  const updates: any = {};
  if (title) updates.title = title;
  if (description) updates.description = description;
  if (date) updates.date = date;

  if (fileImage && fileImage.size > 0) {
    const arrayBuffer = await fileImage.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const ext = fileImage.name.split(".").pop();
    const fileName = `${uuidv4()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET_NAME!)
      .upload(fileName, buffer, {
        contentType: fileImage.type,
        upsert: true,
      });

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET_NAME}/${fileName}`;
    updates.image = publicUrl;
  }

  const { data, error } = await supabase
    .from("events")
    .update(updates)
    .eq("id", id)
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  context: any
) {
  const { id } = context.params;
  const supabase = await createSupabaseServiceClient();

  const { data: event, error: fetchError } = await supabase
    .from("events")
    .select("image")
    .eq("id", id)
    .single();

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  if (event?.image) {
    const imageUrl = event.image;
    const pathStart = imageUrl.indexOf(process.env.SUPABASE_BUCKET_NAME!);
    const filePath = imageUrl.slice(
      pathStart + process.env.SUPABASE_BUCKET_NAME!.length + 1
    );

    const { error: deleteImageError } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET_NAME!)
      .remove([filePath]);

    if (deleteImageError) {
      return NextResponse.json(
        { error: deleteImageError.message },
        { status: 500 }
      );
    }
  }

  const { error: deleteEventError } = await supabase
    .from("events")
    .delete()
    .eq("id", id);

  if (deleteEventError) {
    return NextResponse.json(
      { error: deleteEventError.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Event deleted successfully" },
    { status: 200 }
  );
}
