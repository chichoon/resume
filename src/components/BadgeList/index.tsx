import cx from 'classnames';

import styles from './badgeList.module.scss';

interface Props {
  stacks: string[];
  className?: string;
}

export const BadgeList = ({ stacks, className }: Props) => {
  return (
    <div className={cx(styles.badgeWrapper, className)}>
      {stacks.map((stack) => (
        <div key={`${stack}-badge`} className={styles.badge}>
          <span>{stack}</span>
        </div>
      ))}
    </div>
  );
};
