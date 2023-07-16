import { ProfileType } from '@/types/profileData';
import { HeaderElement } from './HeaderElement';

import styles from './header.module.scss';
import Image from 'next/image';

interface Props {
  profileData: ProfileType;
}

export const Header = ({ profileData }: Props) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerDividerLeft}>
        <Image src={profileData.profileSrc} alt='profile photo' width={200} height={200} />
        <div className={styles.headerDivider}>
          <h1>{profileData.name}</h1>
          <span>프론트엔드 개발자</span>
        </div>
      </div>
      <div className={styles.headerDividerRight}>
        <HeaderElement title='이메일' value={profileData.email} link={`mailto:${profileData.email}`} />
        <HeaderElement title='전화번호' value={process.env.NEXT_PUBLIC_PROFILE_PHONE_NBR} />
        <HeaderElement
          title='GitHub'
          value={`https://github.com/${profileData.githubUsername}`}
          link={`https://github.com/${profileData.githubUsername}`}
        />
        <HeaderElement title='블로그' value={profileData.blogLink} link={profileData.blogLink} />
      </div>
    </header>
  );
};
