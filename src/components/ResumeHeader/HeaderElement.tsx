import styles from './headerElement.module.scss';

interface Props {
  title: string;
  value?: string;
  link?: string;
}

export const HeaderElement = ({ title, value, link }: Props) => {
  return (
    <div className={styles.headerElementWrapper}>
      <h2>{title}</h2>
      {link ? (
        <a href={link} target='_blank' rel='noreferrer' className={styles.link}>
          <span>{value}</span>
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};
