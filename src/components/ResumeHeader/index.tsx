import { ResumeProfileType } from '@/types/resumeData';

import styles from './resumeHeader.module.scss';

interface Props {
  profileData: ResumeProfileType;
}

export const ResumeHeader = ({ profileData }: Props) => {
  return (
    <header className={styles.headerWrapper}>
      <h1>{profileData.name}</h1>
      <div className={styles.headerDataWrapper}>
        <h2>이메일</h2>
        <a href={`mailto:${profileData.email}`} target='_blank'>
          <span className={styles.link}>{profileData.email}</span>
        </a>
      </div>
      <div className={styles.headerDataWrapper}>
        <h2>전화번호</h2>
        <span>{process.env.NEXT_PUBLIC_PROFILE_PHONE_NBR}</span>
      </div>
      <div className={styles.headerDataWrapper}>
        <h2>GitHub</h2>
        <a href={`https://github.com/${profileData.githubUsername}`} target='_blank'>
          <span className={styles.link}>{`https://github.com/${profileData.githubUsername}`}</span>
        </a>
      </div>
      <div className={styles.headerDataWrapper}>
        <h2>블로그</h2>
        <a href={profileData.blogLink} target='_blank'>
          <span className={styles.link}>{profileData.blogLink}</span>
        </a>
      </div>
    </header>
  );
};
