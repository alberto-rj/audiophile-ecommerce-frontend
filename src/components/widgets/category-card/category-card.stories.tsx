import type { Meta, StoryObj } from '@storybook/react-vite';

import { CategoryCard } from '@/components/widgets';
import { cn } from '@/libs/cn';

import mobile from '@/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg';
import tablet from '@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg';
import desktop from '@/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';

type StoryProps = React.ComponentProps<typeof CategoryCard>;

const meta = {
  title: 'widgets/CategoryCard',
  component: CategoryCard,
  args: {
    category: 'Headphones',
    categoryImage: {
      desktop,
      tablet,
      mobile,
    },
    slug: '#',
  },
  parameters: {
    layout: 'centered',
  },
  render: (categoryCardProps) => {
    return (
      <div className={cn('w-150 flex justify-center')}>
        <CategoryCard {...categoryCardProps} />
      </div>
    );
  },
  tags: ['autodocs'],
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
