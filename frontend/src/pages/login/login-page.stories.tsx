import type { Meta, StoryObj } from '@storybook/react-vite';

import { APP_ROUTES } from '@/config/app-routes';
import { LoginPage } from '@/pages';
import { LayoutCenteredOnScreen } from '@/layouts';
import { expect, userEvent, within } from 'storybook/test';

type StoryProps = React.ComponentProps<typeof LoginPage>;

const meta = {
  title: 'pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
    route: APP_ROUTES.login,
    routePath: APP_ROUTES.login,
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

    await userEvent.type(canvas.getByTestId('email'), 'john@example.com');
    await userEvent.type(canvas.getByTestId('password'), 'password123');
  },
};

export const InvalidCredentials: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('email'), 'wrong@example.com');
    await userEvent.type(canvas.getByTestId('password'), 'wrongpassword');

    await userEvent.click(canvas.getByTestId('signIn'));

    const alert = await canvas.findByRole('status');

    await expect(alert).toBeInTheDocument();
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId('email'));
    await userEvent.click(canvas.getByTestId('password'));
    await userEvent.tab();
  },
};
