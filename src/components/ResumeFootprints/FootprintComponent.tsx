import { ResumeFootprintType } from '@/types/resumeData';
import { getPeriodString } from '@/utils';
import { DigestComponent } from '../DigestComponent';

import styles from './resumeFootprints.module.scss';

interface Props {
  footprint: ResumeFootprintType;
}

export const FootprintComponent = ({ footprint }: Props) => {
  const { startDateYear, startDateMonth, startDateDay, endDateYear, endDateMonth, endDateDay } = footprint;

  const periodString = getPeriodString({
    startDateYear,
    startDateMonth,
    startDateDay,
    endDateYear,
    endDateMonth,
    endDateDay,
  });

  return (
    <li className={styles.footprintWrapper}>
      <div className={styles.footprintTitle}>
        <h3>{footprint.title}</h3>
        <span>{footprint.summary}</span>
      </div>
      <span className={styles.footprintTimestamp}>{periodString}</span>
      {footprint.digest && (
        <DigestComponent elementKey={footprint.title} digest={footprint.digest} className={styles.footprintDigest} />
      )}
    </li>
  );
};
