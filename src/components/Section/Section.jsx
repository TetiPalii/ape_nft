export const Section = ({ children }) => {
  return (
    <section className="pt-[60px] mx-auto my-0">
      <div className="px-[15px] py-0 mx-auto my-0 max-w-[246px] md:max-w-[622px] xl:max-w-[1062px]">
        {children}
      </div>
    </section>
  );
};
