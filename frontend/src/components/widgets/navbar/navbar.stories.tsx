import type { Meta, StoryObj } from '@storybook/react-vite';

import { Navbar } from '@/components/widgets';
import { WithCredentialsDecorator } from '@/config/storybook';
import { makeGetCartHandler } from '@/mocks/handlers';
import { cn } from '@/libs/cn';

type StoryProps = React.ComponentProps<typeof Navbar>;

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [makeGetCartHandler({ limit: 0 })],
    },
  },
  decorators: (Story, ctx) => {
    return (
      <div className={cn('inline-screen', 'min-block-screen', 'bg-black')}>
        <Story {...ctx} />
      </div>
    );
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLoggedUser: Story = {
  decorators: [WithCredentialsDecorator],
};

export const WithFilledCart: Story = {
  decorators: [WithCredentialsDecorator],
  parameters: {
    msw: {
      handlers: [makeGetCartHandler()],
    },
  },
};
