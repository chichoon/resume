import cx from 'classnames';
import { GithubButton, LinkButton } from '../Buttons';

import styles from './digestComponent.module.scss';

interface Props {
  elementKey: string;
  digest: {
    description: string;
    link?: string[];
    githubLink?: string[];
  }[];
  className?: string;
}

export const Digest = ({ elementKey, digest, className }: Props) => {
  return (
    <ul className={cx(styles.listWrapper, className)}>
      {digest.map(({ description, link, githubLink }, index) => (
        <li key={`${elementKey}-${index}`}>
          <span>{description}</span>
          {link?.map((href, linkIndex) => (
            <LinkButton href={href} key={`${elementKey}-${index}-${linkIndex}`} className={styles.linkButton} />
          ))}
          {githubLink?.map((href, linkIndex) => (
            <GithubButton href={href} key={`${elementKey}-${index}-${linkIndex}`} className={styles.linkButton} />
          ))}
        </li>
      ))}
    </ul>
  );
};
