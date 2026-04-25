import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Product } from '@/libs/types';

export const productApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),

    getProductBySlug: builder.query<Product, string>({
      query: (slug) => `/products/${slug}`,
    }),

    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `/categories/${category}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useGetProductsByCategoryQuery,
} = productApi;
