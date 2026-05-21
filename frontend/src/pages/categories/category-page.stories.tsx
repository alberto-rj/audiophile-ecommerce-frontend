import type { Meta, StoryObj } from '@storybook/react-vite';

import { APP_ROUTES } from '@/config/app-routes';
import { API_ENDPOINTS } from '@/config/api-endpoints';
import {
  getCategories,
  getCategoryProducts,
  makeInfiniteHandler,
  makeNotFoundHandler,
} from '@/mocks/handlers';
import { CategoryPage } from '@/pages';

type StoryProps = React.ComponentProps<typeof CategoryPage>;

const meta = {
  title: 'pages/CategoryPage',
  component: CategoryPage,
  parameters: {
    layout: 'fullscreen',
    routePath: `${APP_ROUTES.categoryProducts}`,
    route: `${APP_ROUTES.categories}/headphones/products`,
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const endpoint = `/api${API_ENDPOINTS.categories}/:slug/products`;

export const FetchingProducts: Story = {
  parameters: {
    msw: {
      handlers: [makeInfiniteHandler(endpoint)],
    },
  },
};

export const CategoryNotFound: Story = {
  parameters: {
    msw: {
      handlers: [makeNotFoundHandler(endpoint)],
    },
  },
};

export const WithProducts: Story = {
  parameters: {
    msw: {
      handlers: [getCategoryProducts, getCategories],
    },
  },
};
