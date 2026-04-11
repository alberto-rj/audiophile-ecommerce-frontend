import { CategoryListing } from '@/components/widgets';

import headphones from '@/assets/shared/desktop/image-category-thumbnail-headphones.png';
import earphones from '@/assets/shared/desktop/image-category-thumbnail-earphones.png';
import speakers from '@/assets/shared/desktop/image-category-thumbnail-speakers.png';
import { cn } from '@/libs/cn';

function App() {
  return (
    <>
      <div className={cn('flex items-center justify-center')}>
        <div className={cn('max-w-[1200px] mx-auto px-1 py-4')}>
          <CategoryListing
            items={[
              { category: 'Headphones', image: headphones, slug: '#' },
              { category: 'Speakers', image: speakers, slug: '#' },
              { category: 'Earphones', image: earphones, slug: '#' },
              { category: 'Headphones', image: headphones, slug: '#' },
              { category: 'Speakers', image: speakers, slug: '#' },
              { category: 'Earphones', image: earphones, slug: '#' },
              { category: 'Headphones', image: headphones, slug: '#' },
              { category: 'Speakers', image: speakers, slug: '#' },
              { category: 'Earphones', image: earphones, slug: '#' },
              { category: 'Earphones', image: earphones, slug: '#' },
              { category: 'Headphones', image: headphones, slug: '#' },
              { category: 'Speakers', image: speakers, slug: '#' },
              { category: 'Earphones', image: earphones, slug: '#' },
              { category: 'Headphones', image: headphones, slug: '#' },
              { category: 'Speakers', image: speakers, slug: '#' },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
