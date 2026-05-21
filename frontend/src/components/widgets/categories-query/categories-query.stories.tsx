import type { Meta, StoryObj } from '@storybook/react-vite';

import { CategoriesQuery } from '@/components/widgets';
import { cn } from '@/libs/cn';

type StoryProps = React.ComponentProps<typeof CategoriesQuery>;

const meta = {
  title: 'widgets/CategoriesQuery',
  component: CategoriesQuery,
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <div className={cn('py-10', 'wrapper')}>
        <CategoriesQuery />
      </div>
    );
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
