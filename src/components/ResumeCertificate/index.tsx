import { ResumeCertificateType } from '@/types/resumeData';
import { Section } from '../Section';
import { CertificateComponent } from './CertificateComponent';

import styles from './resumeCertificate.module.scss';

interface Props {
  certificateData: ResumeCertificateType[];
}

export const ResumeCertificate = ({ certificateData }: Props) => {
  return (
    <Section title='자격증 및 언어'>
      <ul className={styles.certificatesWrapper}>
        {certificateData.map((certificate) => (
          <CertificateComponent certificate={certificate} key={`${certificate.key}`} />
        ))}
      </ul>
    </Section>
  );
};
