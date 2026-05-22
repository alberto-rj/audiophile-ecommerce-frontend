import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';

import { CheckoutPage } from '@/pages';
import { makeCreateOrderHandler } from '@/mocks/handlers';
import { WithCredentialsDecorator } from '@/config/storybook';
import type { CheckoutFormData } from '@/libs/schemas';

const checkoutFormData: CheckoutFormData = {
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

    await userEvent.type(canvas.getByTestId('name'), checkoutFormData.name);
    await userEvent.type(canvas.getByTestId('email'), checkoutFormData.email);
    await userEvent.type(canvas.getByTestId('phone'), checkoutFormData.phone);
    await userEvent.type(
      canvas.getByTestId('address'),
      checkoutFormData.address,
    );
    await userEvent.type(canvas.getByTestId('zip'), checkoutFormData.zip);
    await userEvent.type(canvas.getByTestId('city'), checkoutFormData.city);
    await userEvent.type(
      canvas.getByTestId('country'),
      checkoutFormData.country,
    );
    await userEvent.type(
      canvas.getByTestId('eMoneyNumber'),
      checkoutFormData.eMoneyNumber!,
    );
    await userEvent.type(
      canvas.getByTestId('eMoneyPin'),
      checkoutFormData.eMoneyPin!,
    );
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

    await userEvent.type(canvas.getByTestId('name'), checkoutFormData.name);
    await userEvent.type(canvas.getByTestId('email'), checkoutFormData.email);
    await userEvent.type(canvas.getByTestId('phone'), checkoutFormData.phone);
    await userEvent.type(
      canvas.getByTestId('address'),
      checkoutFormData.address,
    );
    await userEvent.type(canvas.getByTestId('zip'), checkoutFormData.zip);
    await userEvent.type(canvas.getByTestId('city'), checkoutFormData.city);
    await userEvent.type(
      canvas.getByTestId('country'),
      checkoutFormData.country,
    );
    await userEvent.type(
      canvas.getByTestId('eMoneyNumber'),
      checkoutFormData.eMoneyNumber!,
    );
    await userEvent.type(
      canvas.getByTestId('eMoneyPin'),
      checkoutFormData.eMoneyPin!,
    );

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

    await userEvent.type(canvas.getByTestId('name'), checkoutFormData.name);
    await userEvent.type(canvas.getByTestId('email'), checkoutFormData.email);
    await userEvent.type(canvas.getByTestId('phone'), checkoutFormData.phone);
    await userEvent.type(
      canvas.getByTestId('address'),
      checkoutFormData.address,
    );
    await userEvent.type(canvas.getByTestId('zip'), checkoutFormData.zip);
    await userEvent.type(canvas.getByTestId('city'), checkoutFormData.city);
    await userEvent.type(
      canvas.getByTestId('country'),
      checkoutFormData.country,
    );
    await userEvent.type(
      canvas.getByTestId('eMoneyNumber'),
      checkoutFormData.eMoneyNumber!,
    );
    await userEvent.type(
      canvas.getByTestId('eMoneyPin'),
      checkoutFormData.eMoneyPin!,
    );

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

    await userEvent.type(canvas.getByTestId('name'), checkoutFormData.name);
    await userEvent.type(canvas.getByTestId('email'), checkoutFormData.email);
    await userEvent.type(canvas.getByTestId('phone'), checkoutFormData.phone);
    await userEvent.type(
      canvas.getByTestId('address'),
      checkoutFormData.address,
    );
    await userEvent.type(canvas.getByTestId('zip'), checkoutFormData.zip);
    await userEvent.type(canvas.getByTestId('city'), checkoutFormData.city);
    await userEvent.type(
      canvas.getByTestId('country'),
      checkoutFormData.country,
    );
    await userEvent.type(
      canvas.getByTestId('eMoneyNumber'),
      checkoutFormData.eMoneyNumber!,
    );
    await userEvent.type(
      canvas.getByTestId('eMoneyPin'),
      checkoutFormData.eMoneyPin!,
    );

    await userEvent.click(canvas.getByTestId('submit'));
  },
};
