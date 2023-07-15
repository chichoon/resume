import cx from 'classnames';

import styles from './badgeList.module.scss';

interface Props {
  stacks: string[];
  isCentered?: boolean;
  className?: string;
}

export const BadgeList = ({ stacks, isCentered, className }: Props) => {
  return (
    <div className={cx(styles.badgeWrapper, { [styles.centered]: isCentered }, className)}>
      {stacks.map((stack) => (
        <div key={`${stack}-badge`} className={styles.badge}>
          <span>{stack}</span>
        </div>
      ))}
    </div>
  );
};
