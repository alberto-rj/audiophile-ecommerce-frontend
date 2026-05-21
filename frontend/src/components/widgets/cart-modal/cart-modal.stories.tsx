import type { Meta, StoryObj } from '@storybook/react-vite';

import { CartModalTrigger } from '@/components/widgets';
import { cn } from '@/libs/cn';
import { WithCredentialsDecorator } from '@/config/storybook';
import { API_ENDPOINTS } from '@/config/api-endpoints';
import {
  makeGetCartHandler,
  makeInfiniteHandler,
  makeNotFoundHandler,
} from '@/mocks/handlers';

type StoryProps = React.ComponentProps<typeof CartModalTrigger>;

const meta = {
  title: 'widgets/CartModalTrigger',
  component: CartModalTrigger,
  args: {},
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [makeGetCartHandler({ limit: 0 })],
    },
  },
  render: () => {
    return (
      <div
        className={cn(
          'min-block-screen',
          'flex',
          'justify-center',
          'items-center',

          'bg-black',
        )}
      >
        <CartModalTrigger />
      </div>
    );
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const endpoint = `/api${API_ENDPOINTS.cart}`;

export const Default: Story = {};

export const WithLoggedUser: Story = {
  decorators: [WithCredentialsDecorator],
};

export const FetchingCart: Story = {
  parameters: {
    msw: {
      handlers: [makeInfiniteHandler(endpoint)],
    },
  },
  decorators: [WithCredentialsDecorator],
};

export const CartNotFound: Story = {
  parameters: {
    msw: {
      handlers: [makeNotFoundHandler(endpoint)],
    },
  },
  decorators: [WithCredentialsDecorator],
};

export const WithItems: Story = {
  parameters: {
    msw: {
      handlers: [makeGetCartHandler()],
    },
  },
  decorators: [WithCredentialsDecorator],
};

export const WithSingleItem: Story = {
  parameters: {
    msw: {
      handlers: [makeGetCartHandler({ limit: 1 })],
    },
  },
  decorators: [WithCredentialsDecorator],
};
