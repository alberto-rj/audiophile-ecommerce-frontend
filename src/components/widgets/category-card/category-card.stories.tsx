import type { Meta, StoryObj } from '@storybook/react-vite';
import { CategoryCard } from '@/components/widgets';

type StoryProps = React.ComponentProps<typeof CategoryCard>;

const meta = {
  title: 'widgets/CategoryCard',
  component: CategoryCard,
  args: {
    category: 'HEADPHONES',
    categoryImage: {
      desktop: './',
      tablet: './',
      mobile: './',
    },
    slug: '#',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
