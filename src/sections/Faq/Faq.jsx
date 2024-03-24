import { FaqList } from '@/components/FaqList/FaqList';
import { FaqTitle } from '@/components/SubTitle/SubTitle';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import faqData from '@/data/faqData.json';

export const Faq = () => {
  return (
    <section className="pt-[60px]">
      <div className="mx-auto px-[72px] md:px-[88px] ">
        <SectionTitle>FAQ</SectionTitle>
        {/* <ul>
          {faqData.map(item => {
            console.log(item);
            return (
              <li>
                <FaqTitle>{item.question}</FaqTitle>
              </li>
            );
          })}
        </ul> */}

        <FaqList faqData={faqData} />
      </div>
    </section>
  );
};
