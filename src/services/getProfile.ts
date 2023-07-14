import { ResumeProfileType } from '@/types/resumeData';

import profile from '@/assets/data/myInfo.json';

export async function getProfile() {
  const data = await new Promise<ResumeProfileType>((resolve) => {
    resolve(profile);
  });

  return data;
}
