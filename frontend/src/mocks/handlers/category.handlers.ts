import { http, HttpResponse } from 'msw';

import { products, categories } from '@/libs/mocks';
import type {
  CategoryListResponse,
  CategoryResponse,
  Product,
} from '@/libs/types';

import { withDelay, withInfiniteDelay } from '../middlewares/with-delay';

function sortProductsByNewFirst(products: Product[]) {
  return [...products].sort((a, b) => {
    if (a.isNew && b.isNew) {
      return 0;
    }

    if (a.isNew && !b.isNew) {
      return -1;
    }

    return 1;
  });
}

export const makeGetCategoriesHandler = (
  options: {
    type?: 'error' | 'infinite' | 'default';
    limit?: number;
  } = {},
) => {
  const endpoint = '/api/categories';

  const { type = 'default', limit = categories.length } = options;

  if (type === 'infinite') {
    return http.get(
      endpoint,
      withInfiniteDelay(async () => {
        return HttpResponse.json(undefined);
      }),
    );
  }

  if (type === 'error') {
    return http.get(
      endpoint,
      withDelay(async () => {
        return HttpResponse.json(undefined, { status: 500 });
      }),
    );
  }

  return http.get(
    endpoint,
    withDelay(async () => {
      const filteredCategories = categories.slice(0, limit);

      const response: CategoryListResponse = {
        categories: filteredCategories,
      };

      return HttpResponse.json(response);
    }),
  );
};

export const makeGetCategoryBySlugHandler = (
  options: {
    type?: 'error' | 'infinite' | 'default';
  } = {},
) => {
  const endpoint = '/api/categories/:slug';

  const { type = 'default' } = options;

  if (type === 'infinite') {
    return http.get(
      endpoint,
      withInfiniteDelay(async () => {
        return HttpResponse.json(undefined);
      }),
    );
  }

  if (type === 'error') {
    return http.get(
      endpoint,
      withDelay(async () => {
        return HttpResponse.json(undefined, { status: 500 });
      }),
    );
  }

  return http.get(
    endpoint,
    withDelay(async ({ params }) => {
      const { slug } = params as { slug?: string };

      const foundCategory = categories.find(
        (category) => category.slug.toLowerCase() === slug?.toLowerCase(),
      );

      if (!foundCategory) {
        return new HttpResponse(undefined, { status: 404 });
      }

      const categoryResponse: CategoryResponse = {
        category: foundCategory,
      };

      return HttpResponse.json(categoryResponse);
    }),
  );
};

export const makeGetCategoryProductsHandler = (
  options: {
    type?: 'error' | 'infinite' | 'default';
    limit?: number;
  } = {},
) => {
  const endpoint = '/api/categories/:slug/products';

  const { type = 'default', limit = categories.length } = options;

  if (type === 'infinite') {
    return http.get(
      endpoint,
      withInfiniteDelay(async () => {
        return HttpResponse.json(undefined);
      }),
    );
  }

  if (type === 'error') {
    return http.get(
      endpoint,
      withDelay(async () => {
        return HttpResponse.json(undefined, { status: 500 });
      }),
    );
  }

  return http.get(
    endpoint,
    withDelay(async ({ params }) => {
      const { slug } = params as { slug?: string };

      const foundCategory = categories.find(
        (category) => category.slug.toLowerCase() === slug?.toLowerCase(),
      );

      if (!foundCategory) {
        return new HttpResponse(undefined, { status: 404 });
      }

      const filteredProducts = sortProductsByNewFirst(
        products.filter(
          (p) => p.category.toLowerCase() === slug?.toLowerCase(),
        ),
      ).slice(0, limit);

      const categoryResponse: CategoryResponse = {
        category: {
          ...foundCategory,
          products: filteredProducts,
        },
      };

      return HttpResponse.json(categoryResponse);
    }),
  );
};

export const categoryHandlers = [
  makeGetCategoriesHandler(),
  makeGetCategoryBySlugHandler(),
  makeGetCategoryProductsHandler(),
];
