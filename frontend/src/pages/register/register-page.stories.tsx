import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { APP_ROUTES } from '@/config/app-routes';
import { RegisterPage } from '@/pages';
import { LayoutCenteredOnScreen } from '@/layouts';

type StoryProps = React.ComponentProps<typeof RegisterPage>;

const meta = {
  title: 'pages/RegisterPage',
  component: RegisterPage,
  parameters: {
    layout: 'fullscreen',
    route: APP_ROUTES.register,
    routePath: APP_ROUTES.register,
  },
  decorators: (Story, context) => {
    return (
      <LayoutCenteredOnScreen>
        <Story {...context} />
      </LayoutCenteredOnScreen>
    );
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledValid: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('name'), 'Jane Doe');
    await userEvent.type(canvas.getByTestId('email'), 'jane@example.com');
    await userEvent.type(canvas.getByTestId('password'), 'securepass123');
    await userEvent.type(
      canvas.getByTestId('confirmPassword'),
      'securepass123',
    );
  },
};

export const PasswordMismatch: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('name'), 'Jane Doe');
    await userEvent.type(canvas.getByTestId('email'), 'jane@example.com');
    await userEvent.type(canvas.getByTestId('password'), 'securepass123');
    await userEvent.type(canvas.getByTestId('confirmPassword'), 'different456');
    await userEvent.tab();
  },
};

export const EmailAlreadyInUse: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('name'), 'John Doe');
    await userEvent.type(canvas.getByTestId('email'), 'john@example.com');
    await userEvent.type(canvas.getByTestId('password'), 'password123');
    await userEvent.type(canvas.getByTestId('confirmPassword'), 'password123');

    await userEvent.click(
      canvas.getByRole('button', { name: /create account/i }),
    );

    await expect(await canvas.findByRole('alert')).toBeInTheDocument();
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId('name'));
    await userEvent.click(canvas.getByTestId('email'));
    await userEvent.click(canvas.getByTestId('password'));
    await userEvent.click(canvas.getByTestId('confirmPassword'));
    await userEvent.tab();
  },
};
