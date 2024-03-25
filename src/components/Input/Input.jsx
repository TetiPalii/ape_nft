import { useId } from 'react';
import DiscordIcon from '../../../public/images/header/DiscordIcon';
import Fox from '../../../public/images/contact/Fox';

export const Input = ({ label, placeholder }) => {
  const inputId = useId();
  return (
    <div className="flex h-[48px] xl:h-[64px]">
      <label
        htmlFor={inputId}
        className="flex items-center justify-center w-[48px] h-full rounded-l-xl bg-secondaryTextColor xl:w-[64px]"
      >
        {label === 'discord' ? (
          <DiscordIcon fill={'#5A65F2'} width={'24'} height={'24'} />
        ) : (
          <Fox />
        )}
      </label>

      <input
        id={inputId}
        className="flex items-center w-[168px] h-full pl-6 text-xs leading-[1.67] text-white border border-secondaryTextColor rounded-r-xl bg-transparent outline-0 md:w-[200px] xl:w-[333px] xl:text-base xl:leading-[1.19] focus:border-white"
        placeholder={placeholder}
      />
    </div>
  );
};
