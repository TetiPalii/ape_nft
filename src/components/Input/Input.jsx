import { useId } from 'react';

export const Input = ({ label, placeholder }) => {
  const inputId = useId();
  return (
    <div>
      {' '}
      <label
        htmlFor={inputId}
        className="block w-[48px]h-full rounded-l-xl bg-secondaryTextColor xl:w-[64px]"
      ></label>
      <input
        id={inputId}
        className="flex items-center w-[168px] h-full pl-6 text-xs leading-[1.67] color-white border-[#DC3B5A] rounded-r-xl md:w-[200px] xl:w-[333px] xl:text-base xl:leading-[1.19] focus:border-[#1E1E1E]"
        placeholder={placeholder}
      />
    </div>
  );
};
