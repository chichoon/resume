import { CertificateType } from '@/types/profileData';

import certificates from '@/assets/data/certificateInfo.json';

export async function getCertificates() {
  const data = await new Promise<CertificateType[]>((resolve) => {
    resolve(certificates);
  });

  return data;
}
