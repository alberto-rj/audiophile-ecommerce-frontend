import type { Meta, StoryObj } from '@storybook/react-vite';
import { useDispatch } from 'react-redux';

import { addItem } from '@/app/features/cart';
import type { AppDispatch } from '@/app/store';
import type { CartItem } from '@/libs/types';
import { cartItems } from '@/libs/mocks/cart-items';
import { CheckoutPage } from '@/pages';

type StoryProps = React.ComponentProps<typeof CheckoutPage> & {
  cartItems: CartItem[];
};

const meta = {
  title: 'pages/CheckoutPage',
  component: CheckoutPage,
  parameters: {
    layout: 'fullscreen',
  },
  render: ({ cartItems, ...checkoutPageProps }) => {
    const dispatch = useDispatch<AppDispatch>();

    cartItems.forEach((item) => dispatch(addItem(item)));

    return <CheckoutPage {...checkoutPageProps} />;
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cartItems: [...cartItems],
  },
};
