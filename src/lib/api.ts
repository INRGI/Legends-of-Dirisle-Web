import { Category, Product } from "@/types";
import { createSupabaseServiceClient } from "./supabase-server";

export async function getCategoriesWithProducts(): Promise<
  (Category & { products: Product[] })[]
> {
  const supabase = await createSupabaseServiceClient();

  const { data, error } = await supabase
    .from("categories")
    .select(`
      id,
      name,
      created_at,
      products(*)
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching categories with products:", error.message);
    return [];
  }

  return data as (Category & { products: Product[] })[];
}
