import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="px-2 pt-[54px]">
      <div className="min-w-[344px] min-h-[542px] bg-[#DC3B5A] rounded-xl flex ">
        <div className="mx-auto">
          <Image
            src="/images/apeMobile2x.png"
            alt="logo"
            width={216}
            height={284}
          />
        </div>
      </div>
    </section>
  );
};
