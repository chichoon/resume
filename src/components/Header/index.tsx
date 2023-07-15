import { ProfileType } from '@/types/profileData';
import { HeaderElement } from './HeaderElement';

import styles from './header.module.scss';

interface Props {
  profileData: ProfileType;
}

export const Header = ({ profileData }: Props) => {
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
