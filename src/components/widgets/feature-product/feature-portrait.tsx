import { useId } from 'react';

import type { FeaturePortraitContent } from '@/libs/types';
import { ResponsiveImage } from '@/components/widgets';
import { Button } from '@/components/ui';
import { cn } from '@/libs/cn';

interface FeaturePortraitProps {
  content: FeaturePortraitContent;
}

const FeaturePortrait = ({
  content: { title, action, slug, image },
}: FeaturePortraitProps) => {
  const headingId = useId();

  return (
    <section
      aria-describedby={headingId}
      className={cn(
        'w-full',
        'flex',
        'flex-col',
        'items-start',
        'gap-6',

        'md:flex-row',
        'md:gap-[11px]',

        'bg-white',
      )}
    >
      <div className={cn('relative', 'rounded-lg', 'overflow-hidden')}>
        <ResponsiveImage
          alt=''
          image={image}
          className={cn('absolute', 'inset-0', 'z-10', 'size-full')}
        />
      </div>

      <div
        className={cn(
          'w-1/2',
          'pl-[24px]',
          'py-[101px]',
          'rounded-lg',
          'overflow-hidden',

          'md:pl-[46px]',
          'lg:pl-[95px]',

          'bg-gray-400',
        )}
      >
        <div
          className={cn(
            'max-w-[247px]',
            'flex',
            'flex-col',
            'items-start',
            'gap-8',
          )}
        >
          <h2
            id={headingId}
            className={cn('text-xl', 'text-black', 'uppercase')}
          >
            {title}
          </h2>
          <Button
            variant={'outline'}
            asChild
          >
            <a href={slug}>{action}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturePortrait;
