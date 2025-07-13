export interface Category {
  id: string;
  name: string;
  created_at: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category_id: string;
  images: string[];
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}