import { nanoid } from 'nanoid';
import Image from 'next/image';

export const CollectionItem = ({ images }) => {
  const id = () => nanoid();
  console.log(images);
  return (
    <>
      {images.map(({ img, alt }) => {
        return (
          <div className="w-[216px] h-[256px] rounded-xl">
            <Image
              src={img}
              width={216}
              height={256}
              alt={alt}
              className="object-fit"
              key={id()}
            />
          </div>
        );
      })}
    </>
  );
};
