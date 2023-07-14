import { Paragraph } from './Paragraph';
import { Section } from './Section';

interface Props {
  resumeSummaries: string[];
}

export const ResumeIntroduce = ({ resumeSummaries }: Props) => {
  return (
    <Section title='소개'>
      <Paragraph paragraph={resumeSummaries} fontSize={14} lineGap={5} />
    </Section>
  );
};
