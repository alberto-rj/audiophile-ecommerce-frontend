import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProductPage } from '@/pages';

type StoryProps = React.ComponentProps<typeof ProductPage>;

const meta = {
  title: 'pages/ProductPage',
  component: ProductPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
