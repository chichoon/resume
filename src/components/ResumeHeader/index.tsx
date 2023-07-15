import { ResumeProfileType } from '@/types/resumeData';

import styles from './resumeHeader.module.scss';
import { HeaderElement } from './HeaderElement';

interface Props {
  profileData: ResumeProfileType;
}

export const ResumeHeader = ({ profileData }: Props) => {
  return (
    <header className={styles.headerWrapper}>
      <h1>{profileData.name}</h1>
      <HeaderElement title='이메일' value={profileData.email} link={`mailto:${profileData.email}`} />
      <HeaderElement title='전화번호' value={process.env.NEXT_PUBLIC_PROFILE_PHONE_NBR} />
      <HeaderElement
        title='GitHub'
        value={`https://github.com/${profileData.githubUsername}`}
        link={`https://github.com/${profileData.githubUsername}`}
      />
      <HeaderElement title='블로그' value={profileData.blogLink} link={profileData.blogLink} />
    </header>
  );
};
