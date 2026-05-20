import { createApi } from '@reduxjs/toolkit/query/react';

import type { CategoryListResponse, CategoryResponse } from '@/libs/types';
import { API_ENDPOINTS } from '@/config/api-endpoints';

import { baseQuery } from './base-query';

export const categoryApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryListResponse, void>({
      query: () => `${API_ENDPOINTS.categories}`,
    }),

    getCategoryBySlug: builder.query<CategoryResponse, string>({
      query: (slug) => `${API_ENDPOINTS.categories}/${slug}`,
    }),

    getCategoryProducts: builder.query<CategoryResponse, string>({
      query: (slug) =>
        `${API_ENDPOINTS.categories}/${slug}${API_ENDPOINTS.products}`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryBySlugQuery,
  useGetCategoryProductsQuery,
} = categoryApi;
