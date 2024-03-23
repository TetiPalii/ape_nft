import { Button } from '@/components/Button/Button';
import { Slogan } from '@/components/Slogan/Slogan';
import Image from 'next/image';
//min-w-[344px]
export const Hero = () => {
  return (
    <section className="px-2 text-secondaryTextColor w-full min-h-[542px]">
      {/* hero container */}
      <div
        className=" relative w-full min-h-[542px] bg-[#DC3B5A] pt-[36px] pb-[19px] rounded-xl flex flex-col
          items-center md:min-h-[421px] md:pt-[124px] md:pb-[37px] xl:min-h-[677px]"
      >
        <div
          className="flex flex-col items-center md:items-start  md:px-[72px] 
        md:absolute md:gap-y-2 md:translate-x-[-60px]  md:w-[591px] xl:bottom-[206px] xl:translate-x-[-50px] xl:w-[1070px]"
        >
          <Slogan>diD yOu seE iT ?</Slogan>
          <h1
            className="text-[44px] text-center font-black font-['Right_Grotesk_Compact_Black']
              leading-none flex gap-x-2 md:gap-x-44 md:text-[92px] md:tracking-wide 
              md:justify-between  xl:text-[164px] xl:mb-8 xl:gap-x-72"
          >
            <p>YACHT</p>
            <p>APES</p>
          </h1>
          <Slogan className={'xl:indent-48'}>Apes aRe eveRywhere</Slogan>
        </div>

        {/* ape images */}
        <div className="mx-auto mb-12 md:hidden">
          <Image
            src="/images/hero/apeMobile2x.png"
            alt="ape"
            width={216}
            height={284}
          />
        </div>
        <div className="hidden md:block xl:hidden absolute left-[50%] translate-x-[-50%] bottom-0">
          <Image
            src="/images/hero/apeTablet2x.png"
            width={283}
            height={386}
            alt="ape"
          />
        </div>
        <div className="hidden xl:block absolute left-[50%] translate-x-[-50%] bottom-0">
          <Image
            src="/images/hero/apeDesktop2x.png"
            width={463}
            height={612}
            alt="ape"
          />
          ``
        </div>

        <div
          className="  w-[217px] flex flex-col items-center md:flex-col-reverse
         md:ml-[50px] md:gap-y-4 md:absolute md:translate-x-48 md:translate-y-40
         md:w-[190px] xl:w-[337px] xl:translate-x-[340px] xl:translate-y-[300px] xl:gap-y-7"
        >
          <Button
            className="absolute bottom-[80px] py-3 px-[74px] 
            h-[41px] xl:h-[70px] xl:text-[28px] mb-3 bg-[#1E1E1E1A]
            font-black leading-[1.18] md:leading-[1.21] backdrop-blur 
            md:static md:px-[61px] xl:px-[109px] xl:pt-4 xl:pb-5"
          >
            MEET APES
          </Button>

          <p
            className="text-center font-['Messina_Sans_Mono'] text-xs 
          leading-[1.16] uppercase md:indent-20 md:text-justify 
          xl:text-base xl:leading-[1.187]"
          >
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </div>
    </section>
  );
};
