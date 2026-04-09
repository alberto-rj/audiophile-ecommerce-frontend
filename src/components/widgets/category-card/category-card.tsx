import { ArrowRight } from '@/assets/icons';
import { Button } from '@/components/ui';
import { cn } from '@/libs/cn';
import type { ProductImage } from '@/libs/types';

interface CategoryCardProps {
  categoryImage: ProductImage;
  category: string;
  slug: string;
}

const CategoryCard = ({ category, slug }: CategoryCardProps) => {
  return (
    <a
      href={slug}
      className={cn(
        'inline-grid',
        'gap-8',
        'items-center',
        'justify-center',
        'w-87.5',
        'min-h-[51]',
        'px-8 py-4',
        'rounded-lg',
        'bg-gray-400',
      )}
    >
      <div className={cn('w-full border border-danger-400')}>
        <span
          className={cn('block max-w-30.75 mx-auto min-h-36 bg-gray-700')}
        ></span>
      </div>
      <div className={cn('grid gap-4')}>
        <span className={cn('text-md', 'uppercase')}>{category}</span>
        <Button
          variant='link'
          asChild
          aria-hidden={true}
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
