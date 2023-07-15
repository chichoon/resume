import { Header, Introduce, Projects, Footprints, Certificates } from '@/components';
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
        <Introduce summaries={profileData.summaries} />
        <Projects projectData={projectData} />
        <Footprints footprintData={footprintData} />
        <Certificates certificateData={certificateData} />
      </main>
    </>
  );
};

export default Page;
