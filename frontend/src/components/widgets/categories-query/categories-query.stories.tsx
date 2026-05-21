import type { Meta, StoryObj } from '@storybook/react-vite';

import { CategoriesQuery } from '@/components/widgets';
import { API_ENDPOINTS } from '@/config/api-endpoints';
import { cn } from '@/libs/cn';
import {
  makeGetCategoriesHandler,
  makeInfiniteHandler,
  makeNotFoundHandler,
} from '@/mocks/handlers';

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

const endpoint = `/api${API_ENDPOINTS.categories}`;

export const FetchingCategories: Story = {
  parameters: {
    msw: {
      handlers: [makeInfiniteHandler(endpoint)],
    },
  },
};

export const CategoriesNotFound: Story = {
  parameters: {
    msw: {
      handlers: [makeNotFoundHandler(endpoint)],
    },
  },
};

export const WithThreeCategories: Story = {
  parameters: {
    msw: {
      handlers: [makeGetCategoriesHandler({ limit: 3 })],
    },
  },
};

export const WithSingleCategory: Story = {
  parameters: {
    msw: {
      handlers: [makeGetCategoriesHandler({ limit: 1 })],
    },
  },
};

export const WithNoCategory: Story = {
  parameters: {
    msw: {
      handlers: [makeGetCategoriesHandler({ limit: 0 })],
    },
  },
};
