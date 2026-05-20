import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProductPage } from '@/pages';
import { APP_ROUTES } from '@/config/app-routes';
import {
  getCategories,
  getProductBySlug,
  makeInfiniteHandler,
  makeNotFoundHandler,
} from '@/mocks/handlers';

type StoryProps = React.ComponentProps<typeof ProductPage>;

const meta = {
  title: 'pages/ProductPage',
  component: ProductPage,
  parameters: {
    layout: 'fullscreen',
    routePath: `${APP_ROUTES.productDetails}`,
    route: `${APP_ROUTES.products}/xx99-mark-two-headphones`,
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const endpoint = '/api/products/:slug';

export const FetchingProduct: Story = {
  parameters: {
    msw: {
      handlers: [makeInfiniteHandler(endpoint), getCategories],
    },
  },
};

export const ProductNotFound: Story = {
  parameters: {
    msw: {
      handlers: [makeNotFoundHandler(endpoint), getCategories],
    },
  },
};

export const ProductDetails: Story = {
  parameters: {
    msw: {
      handlers: [getProductBySlug, getCategories],
    },
  },
};
