import { http, HttpResponse } from 'msw';

import { products } from '@/libs/mocks/products';

export const handlers = [
  http.get('/api/products', () => {
    return HttpResponse.json(products);
  }),

  http.get('/api/products/:slug', ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(product);
  }),

  http.get('/api/categories/:name', ({ params }) => {
    const filteredProducts = products.filter((p) => p.category === params.name);

    return HttpResponse.json(filteredProducts);
  }),
];
