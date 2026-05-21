import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';

import { CheckoutPage } from '@/pages';
import { makeCreateOrderHandler } from '@/mocks/handlers';
import { WithCredentialsDecorator } from '@/config/storybook';
import type { CheckoutFormData } from '@/libs/schemas';

type StoryProps = React.ComponentProps<typeof CheckoutPage>;

const meta = {
  title: 'pages/CheckoutPage',
  component: CheckoutPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [WithCredentialsDecorator],
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const formData: CheckoutFormData = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '+1 202-55-0136',
  address: '1137 Williams Avenue',
  zip: '10001',
  city: 'New York',
  country: 'United States',
  eMoneyNumber: '238521993',
  eMoneyPin: '6891',
  paymentMethod: 'e-money',
};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId('name'));
    await userEvent.click(canvas.getByTestId('email'));
    await userEvent.click(canvas.getByTestId('phone'));
    await userEvent.click(canvas.getByTestId('address'));
    await userEvent.click(canvas.getByTestId('zip'));
    await userEvent.click(canvas.getByTestId('city'));
    await userEvent.click(canvas.getByTestId('country'));
    await userEvent.click(canvas.getByTestId('eMoneyNumber'));
    await userEvent.click(canvas.getByTestId('eMoneyPin'));
    await userEvent.tab();
  },
};

export const FilledValid: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('name'), formData.name);
    await userEvent.type(canvas.getByTestId('email'), formData.email);
    await userEvent.type(canvas.getByTestId('phone'), formData.phone);
    await userEvent.type(canvas.getByTestId('address'), formData.address);
    await userEvent.type(canvas.getByTestId('zip'), formData.zip);
    await userEvent.type(canvas.getByTestId('city'), formData.city);
    await userEvent.type(canvas.getByTestId('country'), formData.country);
    await userEvent.type(
      canvas.getByTestId('eMoneyNumber'),
      formData.eMoneyNumber!,
    );
    await userEvent.type(canvas.getByTestId('eMoneyPin'), formData.eMoneyPin!);
  },
};

export const PlacingOrder: Story = {
  parameters: {
    msw: {
      handlers: [makeCreateOrderHandler({ type: 'infinite' })],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('name'), 'Jane Doe');
    await userEvent.type(canvas.getByTestId('email'), 'jane@example.com');
    await userEvent.type(canvas.getByTestId('phone'), '+244 935 661 692');
    await userEvent.type(canvas.getByTestId('address'), '1137 Williams Avenue');
    await userEvent.type(canvas.getByTestId('zip'), '10001');
    await userEvent.type(canvas.getByTestId('city'), 'New York');
    await userEvent.type(canvas.getByTestId('country'), 'United States');
    await userEvent.type(canvas.getByTestId('eMoneyNumber'), '238521993');
    await userEvent.type(canvas.getByTestId('eMoneyPin'), '6891');

    await userEvent.click(canvas.getByTestId('submit'));
  },
};

export const WithFailed: Story = {
  parameters: {
    msw: {
      handlers: [makeCreateOrderHandler({ type: 'error' })],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('name'), 'Jane Doe');
    await userEvent.type(canvas.getByTestId('email'), 'jane@example.com');
    await userEvent.type(canvas.getByTestId('phone'), '+244 935 661 692');
    await userEvent.type(canvas.getByTestId('address'), '1137 Williams Avenue');
    await userEvent.type(canvas.getByTestId('zip'), '10001');
    await userEvent.type(canvas.getByTestId('city'), 'New York');
    await userEvent.type(canvas.getByTestId('country'), 'United States');
    await userEvent.type(canvas.getByTestId('eMoneyNumber'), '238521993');
    await userEvent.type(canvas.getByTestId('eMoneyPin'), '6891');

    await userEvent.click(canvas.getByTestId('submit'));
  },
};

export const WithPlacedOrder: Story = {
  parameters: {
    msw: {
      handlers: [makeCreateOrderHandler()],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('name'), 'Jane Doe');
    await userEvent.type(canvas.getByTestId('email'), 'jane@example.com');
    await userEvent.type(canvas.getByTestId('phone'), '+244 935 661 692');
    await userEvent.type(canvas.getByTestId('address'), '1137 Williams Avenue');
    await userEvent.type(canvas.getByTestId('zip'), '10001');
    await userEvent.type(canvas.getByTestId('city'), 'New York');
    await userEvent.type(canvas.getByTestId('country'), 'United States');
    await userEvent.type(canvas.getByTestId('eMoneyNumber'), '238521993');
    await userEvent.type(canvas.getByTestId('eMoneyPin'), '6891');

    await userEvent.click(canvas.getByTestId('submit'));
  },
};
