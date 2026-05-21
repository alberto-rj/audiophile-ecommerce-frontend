import { http, HttpResponse } from 'msw';

import { orders } from '@/libs/mocks/orders';
import type { CreateOrderPayload, Order } from '@/libs/types';
import {
  cart,
  getGrandTotal,
  getShipping,
  getSubtotal,
  getVAT,
} from '@/libs/mocks/cart';

import { withAuth } from '../middlewares/with-auth';
import { withDelay } from '../middlewares/with-delay';

export const getOrders = http.get(
  '/api/orders',

  withAuth(async () => {
    return HttpResponse.json({ orders });
  }),
);

export const getOrderById = http.get(
  '/api/orders/:slug',

  withDelay(
    withAuth(async ({ params }) => {
      const { slug } = params as { slug?: string };

      const foundOrder = orders.find((order) => order.id === Number(slug));

      if (typeof foundOrder === 'undefined') {
        return HttpResponse.json(undefined, { status: 404 });
      }

      return HttpResponse.json({ order: foundOrder });
    }),
  ),
);

export const createOrder = http.post(
  '/api/orders',

  withDelay(
    withAuth(async ({ request }) => {
      const payload = (await request.json()) as CreateOrderPayload;

      const createdOrder: Order = {
        ...payload,
        id: orders.length + 1,
        status: 'pending',
        vat: getVAT(cart.items),
        shipping: getShipping(),
        subtotal: getSubtotal(cart.items),
        grandTotal: getGrandTotal(cart.items),
        createdAt: new Date().toISOString(),
      };

      orders.push(createdOrder);

      return HttpResponse.json({ order: createdOrder }, { status: 201 });
    }),
  ),
);

export const orderHandlers = [getOrders, getOrderById, createOrder];
