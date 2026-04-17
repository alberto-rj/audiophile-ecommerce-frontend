import type { Meta, StoryObj } from '@storybook/react-vite';

import { SuggestionSection } from '@/components/widgets';

import { suggestionItems } from '@/libs/constants';
import { cn } from '@/libs/cn';

type StoryProps = React.ComponentProps<typeof SuggestionSection>;

const meta = {
  title: 'widgets/SuggestionSection',
  component: SuggestionSection,
  parameters: {
    layout: 'fullscreen',
  },
  render: (suggestionSectionProps) => {
    return (
      <div className={cn('region', 'wrapper')}>
        <SuggestionSection {...suggestionSectionProps} />
      </div>
    );
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'You may also like',
    items: suggestionItems,
  },
};

export const Multiple: Story = {
  args: {
    title: 'You may also like',
    items: [...suggestionItems, ...suggestionItems, ...suggestionItems],
  },
};
