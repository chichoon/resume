import cx from 'classnames';

import { ShareIcon } from '@/assets/svgs';

import styles from './button.module.scss';

interface Props {
  href: string;
  size?: number;
  className?: string;
}

export const LinkButton = ({ href, size = 15, className }: Props) => {
  return (
    <a
      href={href}
      className={cx(styles.link, className)}
      target='_blank'
      rel='noreferrer'
      style={{ width: size, height: size }}
    >
      <ShareIcon />
    </a>
  );
};
