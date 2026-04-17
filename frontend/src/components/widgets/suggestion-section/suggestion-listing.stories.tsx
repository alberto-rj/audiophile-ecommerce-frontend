import type { Meta, StoryObj } from '@storybook/react-vite';

import { suggestionItems } from '@/libs/constants';
import { cn } from '@/libs/cn';

import SuggestionListing from './suggestion-listing';

type StoryProps = React.ComponentProps<typeof SuggestionListing>;

const suggestionListingProps: StoryProps = {
  items: suggestionItems,
};

const meta = {
  title: 'widgets/SuggestionSection/SuggestionListing',
  component: SuggestionListing,
  parameters: {
    layout: 'fullscreen',
  },
  render: (suggestionListingProps) => {
    return (
      <div className={cn('region', 'wrapper')}>
        <SuggestionListing {...suggestionListingProps} />
      </div>
    );
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [...suggestionListingProps.items],
  },
};

export const Multiple: Story = {
  args: {
    items: [
      ...suggestionListingProps.items,
      ...suggestionListingProps.items,
      ...suggestionListingProps.items,
    ],
  },
};
