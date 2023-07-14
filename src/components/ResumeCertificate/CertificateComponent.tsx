import { ResumeCertificateType } from '@/types/resumeData';

import styles from './resumeCertificate.module.scss';

interface Props {
  certificate: ResumeCertificateType;
}

export const CertificateComponent = ({ certificate }: Props) => {
  const date = `${certificate.year}. ${certificate.month.toString().padStart(2, '0')}`;

  return (
    <li className={styles.certificateWrapper}>
      <div className={styles.certificateTitle}>
        <h3>{certificate.title}</h3>
        <span>{date}</span>
      </div>
      <div className={styles.certificateScore}>
        <span>{certificate.score}</span>
      </div>
    </li>
  );
};
