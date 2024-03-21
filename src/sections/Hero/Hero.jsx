import { Button } from '@/components/Button/Button';
import Image from 'next/image';
//min-w-[344px]
export const Hero = () => {
  return (
    <section className="px-2 text-primaryTextColor">
      <div className="w-full absolute top-4 pt-[36px] pb-[19px] bg-[#DC3B5A] rounded-xl flex flex-col items-center">
        <p className="font-BiroScript leading-relaxed text-base text-center">
          diD yOu seE iT ?
        </p>
        <h1 className="text[44px] font-black font-['Right_Grotesk_Compact_Black'] mb-2 leading-none">
          YACHT APES
        </h1>
        <p className="font-BiroScript leading-relaxed text-base text-center">
          Apes aRe eveRywhere
        </p>
        <div className="mx-auto mb-12">
          <Image
            src="/images/hero/apeMobile2x.png"
            alt="logo"
            width={216}
            height={284}
          />
        </div>
        <Button
          className="absolute bottom-[95px] mb-3 bg-[#1E1E1E1A] 
        font-black leading-[1.18] rounded-lg py-3 px-[74px] transition-colors
         hover:text-white font-['Right_Grotesk_Compact_Black' z-100]"
        >
          MEET APES
        </Button>
        <div className="w-[217px]">
          <p className="text-center font-['Messina_Sans_Mono'] text-xs leading-[1.16] uppercase">
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </div>
    </section>
  );
};
