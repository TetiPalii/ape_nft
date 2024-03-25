import { nanoid } from 'nanoid';
import Image from 'next/image';

export const CollectionItem = ({ images }) => {
  const id = () => nanoid();

  return (
    <>
      {images.map(({ img, alt }) => {
        return (
          <div className="w-[216px] h-[256px] rounded-xl" key={id()}>
            <Image
              src={img}
              width={216}
              height={256}
              alt={alt}
              className="object-fit"
            />
          </div>
        );
      })}
    </>
  );
};
