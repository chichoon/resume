import { ResumeCertificateType } from '@/types/resumeData';

import certificates from '@/assets/data/certificateInfo.json';

export async function getCertificates() {
  const data = await new Promise<ResumeCertificateType[]>((resolve) => {
    resolve(certificates);
  });

  return data;
}
