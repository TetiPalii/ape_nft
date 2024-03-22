import { Button } from '@/components/Button/Button';
import { Slogan } from '@/components/Slogan/Slogan';
import Image from 'next/image';
//min-w-[344px]
export const Hero = () => {
  return (
    <section className="px-2 text-primaryTextColor absolute  top-14 w-full ">
      <div
        className="w-full  pt-[36px] pb-[19px] bg-[#DC3B5A] rounded-xl flex flex-col 
      items-center md:pt-[112px] md:pb-[123px] md:items-baseline "
      >
        <div className="flex flex-col items-center md:items-start w-[591px] self-center">
          <Slogan>diD yOu seE iT ?</Slogan>
          <div
            className="text-[44px] font-black font-['Right_Grotesk_Compact_Black'] mb-2 
          leading-none md:text-[92px] md:flex md:justify-between w-full"
          >
            <p>YACHT </p>
            <p>APES</p>
          </div>
          <Slogan>Apes aRe eveRywhere</Slogan>
        </div>

        <div className="mx-auto mb-12 md:hidden">
          <Image
            src="/images/hero/apeMobile2x.png"
            alt="ape"
            width={216}
            height={284}
          />
        </div>
        <div className="hidden md:block absolute left-[50%] translate-x-[-50%] bottom-0">
          <Image
            src="/images/hero/apeTablet2x.png"
            width={283}
            height={386}
            alt="ape"
          />
        </div>
        <div className="w-[217px] flex flex-col  items-center md:flex-col-reverse md:ml-auto">
          <Button
            className=" absolute bottom-[60px] py-3 px-[74px] h-[41px] xl:h-[70px] XL:text-[28px] mb-3 bg-[#1E1E1E1A] 
        font-black leading-[1.18] md:leading-[1.21] 
        backdrop-blur md:static"
          >
            MEET APES
          </Button>

          <p className="text-center font-['Messina_Sans_Mono'] text-xs leading-[1.16] uppercase md:text-left">
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </div>
    </section>
  );
};
