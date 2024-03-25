import { Button } from '../Button/Button';

export const Form = ({ children }) => {
  return (
    <form className="flex flex-col gap-4 mx-auto md:w-[248px] xl:w-[397px]">
      {children}
      <Button
        className={
          'bg-accentColor px-[91px] py-3 hover:text-secondaryTextColor focus:text-secondaryTextColor'
        }
      >
        MINT
      </Button>
    </form>
  );
};
