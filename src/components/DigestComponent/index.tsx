import cx from 'classnames';
import { LinkButton } from '@/components';

import styles from './digestComponent.module.scss';

interface Props {
  elementKey: string;
  digest: {
    description: string;
    link?: string[];
  }[];
  className?: string;
}

export const DigestComponent = ({ elementKey, digest, className }: Props) => {
  return (
    <ul className={cx(styles.listWrapper, className)}>
      {digest.map(({ description, link }, index) => (
        <li key={`${elementKey}-${index}`}>
          <span>{description}</span>
          {link?.map((href, linkIndex) => (
            <LinkButton href={href} key={`${elementKey}-${index}-${linkIndex}`} className={styles.linkButton} />
          ))}
        </li>
      ))}
    </ul>
  );
};
