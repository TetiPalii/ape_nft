// import Slider from 'react-slick';
import { CollectionItem } from '@/components/CollectionItem/CollectionItem';
import { Slider } from '@/components/Slider/Slider';
import { collection } from '@/data/collection';

// import Slider from 'react-slick';

export const Collection = () => {
  //   console.log('col', collection);
  return (
    <section className="pt-[60px] mx-auto my-0">
      <div className="px-[72px] mx-auto">
        <Slider>
          <CollectionItem images={collection} />
        </Slider>
      </div>
    </section>
  );
};
