import { Metadata } from 'next';
import { ResumeFootprints, Header, ResumeIntroduce, ResumeProjects, ResumeCertificate } from '@/components';
import { getCertificates, getFootprints, getProfile, getProjects } from '@/services';

import styles from './resumePage.module.scss';

const Page = async () => {
  const profileData = await getProfile();
  const projectData = await getProjects();
  const footprintData = await getFootprints();
  const certificateData = await getCertificates();

  return (
    <>
      <Header profileData={profileData} />
      <main className={styles.mainWrapper}>
        {/* <ResumeIntroduce resumeSummaries={profileData.resumeSummaries} />
        <ResumeProjects projectData={projectData} />
        <ResumeFootprints footprintData={footprintData} />
        <ResumeCertificate certificateData={certificateData} /> */}
      </main>
    </>
  );
};

export default Page;
