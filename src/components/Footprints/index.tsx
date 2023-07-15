import { FootprintType } from '@/types/profileData';
import { FootprintComponent } from './FootprintElement';
import { Section } from '../Section';

import styles from './footprints.module.scss';

interface Props {
  footprintData: FootprintType[];
}

export const Footprints = ({ footprintData }: Props) => {
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
