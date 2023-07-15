import { CertificateType } from '@/types/profileData';
import { Section } from '../Section';
import { CertificateComponent } from './CertificateElement';

import styles from './certificates.module.scss';

interface Props {
  certificateData: CertificateType[];
}

export const Certificates = ({ certificateData }: Props) => {
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
