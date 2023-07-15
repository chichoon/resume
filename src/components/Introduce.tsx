import { Paragraph } from './Paragraph';
import { Section } from './Section';

interface Props {
  summaries: string[];
}

export const Introduce = ({ summaries }: Props) => {
  return (
    <Section title='소개'>
      <Paragraph paragraph={summaries} fontSize={14} lineGap={5} />
    </Section>
  );
};
