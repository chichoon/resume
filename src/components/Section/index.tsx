import styles from './section.module.scss';

interface Props {
  title: string;
  children: JSX.Element;
}

export const Section = ({ title, children }: Props) => {
  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.inner}>{children}</div>
    </section>
  );
};
