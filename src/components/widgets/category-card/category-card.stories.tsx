import type { Meta, StoryObj } from '@storybook/react-vite';

import { CategoryCard } from '@/components/widgets';
import { cn } from '@/libs/cn';

import image from '@/assets/shared/desktop/image-category-thumbnail-headphones.png';

type StoryProps = React.ComponentProps<typeof CategoryCard>;

const meta = {
  title: 'widgets/CategoryCard',
  component: CategoryCard,
  args: {
    category: 'Headphones',
    image,
    slug: '#',
  },
  parameters: {
    layout: 'centered',
  },
  render: (categoryCardProps) => {
    return (
      <div
        className={cn(
          'grid grid-cols-[repeat(auto-fill,minmax(37.5rem,1fr))] justify-items-center',
        )}
      >
        <CategoryCard {...categoryCardProps} />
      </div>
    );
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
