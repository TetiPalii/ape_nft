// import SliderComponent from '@/components/Slider/SliderComponent';

import { Cards } from '@/components/Cards/Cards';

export const MindMap = () => {
  return (
    <section className="px-[72px] pt-[60px]">
      <div className="w-">
        <h2 className="uppercase font-black font-RightGrotesk text-[44px] text-center leading-[0.909] mb-6">
          Mind Map
        </h2>
        <div className="flex flex-col  ">
          {/* <p className="uppercase text-xs text-left leading-[1.1666]">
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </p>
          <h3 className="text-[32px] font-black font-RightGrotesk">
            YAPE DROP
                  </h3> */}
          {/* <SliderComponent /> */}
          <Cards />
        </div>
      </div>
    </section>
  );
};
