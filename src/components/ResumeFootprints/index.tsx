import { ResumeFootprintType } from '@/types/resumeData';
import { FootprintComponent } from './FootprintComponent';
import { Section } from '../Section';

import styles from './resumeFootprints.module.scss';

interface Props {
  footprintData: ResumeFootprintType[];
}

export const ResumeFootprints = ({ footprintData }: Props) => {
  return (
    <Section title='발자취'>
      <ul className={styles.footprintsWrapper}>
        {footprintData.map((footprint) => (
          <FootprintComponent key={`footprint-${footprint.key}`} footprint={footprint} />
        ))}
      </ul>
    </Section>
  );
};
