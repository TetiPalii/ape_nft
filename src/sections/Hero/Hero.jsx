import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="px-2 pt-[54px] text-[#1E1E1E]">
      <div className="pt-[36px] min-w-[344px] min-h-[542px] bg-[#DC3B5A] rounded-xl flex flex-col items-center relative">
        <p className="font-['Biro_Script_Plus'] leading-relaxed text-base">
          diD yOu seE iT ?
        </p>
        <h1 className="text[44px] font-black font-['Right_Grotesk']">
          YACHT APES
        </h1>
        <p className="font-['Biro_Script_Plus'] leading-relaxed text-base">
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
        <button
          type="button"
          className="absolute bottom-[112px]  
          bg-[#1E1E1E1A] font-black leading-[1.1] rounded-lg py-3 px-[60px]"
        >
          MEET APES
        </button>
        <div className="w-[217px]">
          <p
            className="text-center font-['
Messina_Sans_Mono'] text-xs leading-[1.16]"
          >
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </div>
    </section>
  );
};
