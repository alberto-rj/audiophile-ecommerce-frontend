import type { Category } from '@/libs/types';
import { products } from './products';

export const categories: Category[] = [
  {
    id: 1,
    slug: 'headphones',
    image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    name: 'Headphones',
    description: 'Headphones description',
    products: products.filter(
      (product) => product.category.toLowerCase() === 'headphones',
    ),
  },
  {
    id: 2,
    slug: 'speakers',
    image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
    name: 'Speakers',
    description: 'Speakers description',
    products: products.filter(
      (product) => product.category.toLowerCase() === 'speakers',
    ),
  },
  {
    id: 3,
    slug: 'earphones',
    image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
    name: 'Earphones',
    description: 'Earphones description',
    products: products.filter(
      (product) => product.category.toLowerCase() === 'earphones',
    ),
  },
];
