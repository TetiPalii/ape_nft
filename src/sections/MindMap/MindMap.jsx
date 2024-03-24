import { Slider } from '@/components/Slider/Slider';
import mindMap from '@/data/mindMap.json';
import { MindMapCard } from '@/components/MindMapCard/MindMapCard';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

export const MindMap = () => {
  return (
    <section className="px-[72px] pt-[60px]">
      <div className="mx-auto my-0">
        <SectionTitle>Mind Map</SectionTitle>
        <div className="flex flex-col mb-6 ">
          <Slider>
            <MindMapCard mindMap={mindMap} />
          </Slider>
        </div>
        <div className="flex items-center justify-center gap-x-12">
          <div className="opacity-0 w-1 h-1">1</div>
          <div className="opacity-0 w-1 h-1"></div>
        </div>
      </div>
    </section>
  );
};
