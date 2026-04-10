import { ArrowRight } from '@/assets/icons';
import { Button } from '@/components/ui';
import { ResponsiveImage } from '@/components/widgets';
import { cn } from '@/libs/cn';
import type { ProductImage } from '@/libs/types';

interface CategoryCardProps {
  categoryImage: ProductImage;
  category: string;
  slug: string;
}

const CategoryCard = ({ category, slug, categoryImage }: CategoryCardProps) => {
  return (
    <a
      href={slug}
      className={cn(
        'relative',
        'inline-grid',
        'items-end',
        'justify-center',
        'max-w-87.5',
        'w-full',
        'min-h-51',
        'px-8',
        'pt-24',
        'pb-6',
        'rounded-lg',
        'bg-gray-400',
      )}
    >
      <span className={cn('sr-only')}>Shop {category}</span>
      <ResponsiveImage
        alt=''
        image={categoryImage}
        className={cn(
          'absolute',
          'top-0',
          'left-1/2',
          '-translate-x-1/2',
          '-translate-y-1/2',
          'w-30.75',
          'min-h-36',
        )}
      />
      <div
        aria-hidden={true}
        className={cn('grid', 'gap-4')}
      >
        <span className={cn('text-md', 'uppercase')}>{category}</span>
        <Button
          variant='link'
          asChild
        >
          <span>
            Shop <ArrowRight />
          </span>
        </Button>
      </div>
    </a>
  );
};

export default CategoryCard;
