import { Form } from "@/components/Form'/Form";
import { Input } from '@/components/Input/Input';
import { Section } from '@/components/Section/Section';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Text } from '@/components/Text/Text';

export const Contact = () => {
  return (
    <Section>
      <SectionTitle>Are you in?</SectionTitle>
      <div className="mx-auto md:w-[397px] xl:w-[581px]">
        <div className="text-center mb-4 md:mb-6 xl:mb-10 xl:text-2xl xl:leading-[1.21]">
          <Text className={'text-base leading-[1.187]'}>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </Text>
        </div>
        <Form>
          <Input />
          <Input />
        </Form>
      </div>
    </Section>
  );
};
