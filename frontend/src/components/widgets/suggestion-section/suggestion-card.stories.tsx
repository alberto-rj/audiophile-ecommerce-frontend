import type { Meta, StoryObj } from '@storybook/react-vite';

import { cn } from '@/libs/cn';
import { suggestionXX99 } from '@/libs/constants';

import SuggestionCard from './suggestion-card';

type StoryProps = React.ComponentProps<typeof SuggestionCard>;

const meta = {
  title: 'widgets/SuggestionSection/SuggestionCard',
  component: SuggestionCard,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    content: suggestionXX99,
  },
  render: (props) => {
    return (
      <div className={cn('region', 'wrapper')}>
        <SuggestionCard {...props} />
      </div>
    );
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
