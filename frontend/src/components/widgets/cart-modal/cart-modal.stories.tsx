import { useDispatch } from 'react-redux';
import type { Meta, StoryObj } from '@storybook/react-vite';

import type { AppDispatch } from '@/app/store';
import { addItem } from '@/app/features/cart';
import { CartModal } from '@/components/widgets';
import { cn } from '@/libs/cn';
import { cartItems } from '@/libs/mocks/cart-items';
import type { CartItem } from '@/libs/types';

type StoryProps = React.ComponentProps<typeof CartModal> & {
  cartItems: CartItem[];
};

const meta = {
  title: 'widgets/CartModal',
  component: CartModal,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: ({ cartItems }) => {
    const dispatch = useDispatch<AppDispatch>();

    cartItems.forEach((item) => dispatch(addItem(item)));

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
        <CartModal />
      </div>
    );
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cartItems: [...cartItems].splice(0, 3),
  },
};

export const WithMultipleItems: Story = {
  args: {
    cartItems: [...cartItems],
  },
};

export const WithSingleItem: Story = {
  args: {
    cartItems: [...cartItems].splice(0, 1),
  },
};

export const WithNoItem: Story = {
  args: {
    cartItems: [],
  },
};
