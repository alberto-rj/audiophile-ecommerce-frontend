import type { Product } from './';

export interface BaseCategory {
  id: number;
  slug: string;
  image: string;
  name: string;
  description: string;
}

export interface Category extends BaseCategory {
  products?: Product[];
}

export interface CategoryResponse {
  category: Category;
}

export interface CategoryListResponse {
  categories: Category[];
}
