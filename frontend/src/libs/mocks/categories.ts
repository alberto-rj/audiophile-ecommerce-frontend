import earphones from '@/assets/shared/desktop/image-category-thumbnail-earphones.png';
import speakers from '@/assets/shared/desktop/image-category-thumbnail-speakers.png';
import headphones from '@/assets/shared/desktop/image-category-thumbnail-headphones.png';

import type { Category } from '@/libs/types';

export const categories: Category[] = [
  {
    id: 1,
    slug: 'headphones',
    image: headphones,
    name: 'Headphones',
    description: 'Headphones description',
  },
  {
    id: 2,
    slug: 'speakers',
    image: speakers,
    name: 'Speakers',
    description: 'Speakers description',
  },
  {
    id: 3,
    slug: 'earphones',
    image: earphones,
    name: 'Earphones',
    description: 'Earphones description',
  },
];
