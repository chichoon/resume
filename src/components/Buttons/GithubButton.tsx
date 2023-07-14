import cx from 'classnames';

import { GithubIcon } from '@/assets/svgs';

import styles from './button.module.scss';

interface Props {
  href: string;
  size?: number;
  className?: string;
}

export const GithubButton = ({ href, size = 15, className }: Props) => {
  return (
    <a href={href} className={cx(styles.github, className)} target='_blank' style={{ width: size, height: size }}>
      <GithubIcon />
    </a>
  );
};
