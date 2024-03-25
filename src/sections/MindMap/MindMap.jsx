import { Slider } from '@/components/Slider/Slider';
import mindMap from '@/data/mindMap.json';
import { MindMapCard } from '@/components/MindMapCard/MindMapCard';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { nanoid } from 'nanoid';
import { Text } from '@/components/Text/Text';
import { Link } from 'lucide-react';

export const MindMap = () => {
  return (
    <section className="px-[72px] pt-[60px]">
      <div className="mx-auto my-0">
        <SectionTitle>Mind Map</SectionTitle>
        <div className="flex flex-col mb-6 md:hidden ">
          <Slider>
            <MindMapCard mindMap={mindMap} />
          </Slider>
        </div>
        <div className="flex items-center justify-center gap-x-12 md:hidden">
          <div className="opacity-0 w-1 h-1">1</div>
          <div className="opacity-0 w-1 h-1"></div>
        </div>
        <ul className="hidden md:mx-auto md:grid md:grid-cols-2 md:gap-6 ">
          {mindMap.map(item => {
            return (
              <li
                key={nanoid()}
                className="bg-secondaryTextColor flex flex-col items-center px-6 py-3 rounded-xl"
              >
                <Text className="mb-[78px] md:text-2xl md:pl-[132px] xl:pl-[252px] ">
                  {item.description}
                </Text>
                <h3 className="uppercase text-[32px] font-black font-['Right_Grotesk_Compact_Black'] text-left xl:text-[64px]">
                  {item.title}
                </h3>
              </li>
            );
          })}
          <li className="bg-secondaryTextColor flex flex-col items-center px-6 py-3 rounded-xl">
            <Link href="https://www.alamy.com/concept-of-nft-mind-map-in-handwritten-style-image442981541.html"></Link>
            <h3 className="uppercase text-[32px] font-black 'Right_Grotesk_Compact_Black'] xl:text-[64px] text-left md:pt-[146px] md:px-6 ">
              Learn more in mind map
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};
