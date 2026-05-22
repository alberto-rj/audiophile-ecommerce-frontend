import type { Meta, StoryObj } from '@storybook/react-vite';

import { WithCredentialsDecorator } from '@/config/storybook';
import { OrdersPage } from '@/pages';
import { makeGetOrdersHandler } from '@/mocks/handlers';

type StoryProps = React.ComponentProps<typeof OrdersPage>;

const meta = {
  title: 'pages/OrdersPage',
  component: OrdersPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [WithCredentialsDecorator],
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FetchingOrders: Story = {
  parameters: {
    msw: {
      handlers: [makeGetOrdersHandler({ type: 'infinite' })],
    },
  },
};

export const FailedToLoadOrders: Story = {
  parameters: {
    msw: {
      handlers: [makeGetOrdersHandler({ type: 'error' })],
    },
  },
};

export const WithOrders: Story = {
  parameters: {
    msw: {
      handlers: [makeGetOrdersHandler()],
    },
  },
};

export const WithSingleOrder: Story = {
  parameters: {
    msw: {
      handlers: [makeGetOrdersHandler({ limit: 1 })],
    },
  },
};

export const EmptyOrders: Story = {
  parameters: {
    msw: {
      handlers: [makeGetOrdersHandler({ limit: 0 })],
    },
  },
};
