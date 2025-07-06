import { NextResponse } from 'next/server';
import { createSupabaseServiceClient } from '@/lib/supabase-server';

export async function GET() {
  const supabase = await createSupabaseServiceClient();

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
