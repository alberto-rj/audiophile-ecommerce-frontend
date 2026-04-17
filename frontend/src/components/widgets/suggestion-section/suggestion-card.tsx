import { useId } from 'react';

import type { SuggestionCardContent } from '@/libs/types';
import { cn } from '@/libs/cn';
import { ResponsiveImage } from '@/components/widgets';
import { Button } from '@/components/ui';

interface SuggestionCardProps {
  content: SuggestionCardContent;
}

const SuggestionCard = ({
  content: { image, title, action, slug },
}: SuggestionCardProps) => {
  const headingId = useId();

  return (
    <article
      aria-labelledby={headingId}
      className={cn(
        'w-full',
        'flex',
        'flex-col',
        'items-center',
        'gap-8',

        'md:gap-10',
        'overflow-hidden',
      )}
    >
      <ResponsiveImage
        alt=''
        loading='lazy'
        image={image}
        className={cn(
          'w-full',
          'h-30',
          'object-cover',
          'overflow-hidden',
          'rounded-lg',

          'md:h-79.5',
        )}
      />

      <div className={cn('flex', 'flex-col', 'items-center', 'gap-8')}>
        <h3
          id={headingId}
          className={cn(
            'text-lg',
            'uppercase',

            'text-black',
          )}
        >
          {title}
        </h3>
        <Button
          variant={'primary'}
          asChild
        >
          <a href={slug}>
            <span aria-hidden={true}>{action}</span>
          </a>
        </Button>
      </div>
    </article>
  );
};

export default SuggestionCard;
