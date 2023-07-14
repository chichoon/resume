import styles from './paragraph.module.scss';

interface Props {
  paragraph: string[];
  lineGap: number;
  fontSize?: number;
}

export const Paragraph = ({ paragraph, fontSize = 16, lineGap }: Props) => {
  return (
    <>
      {paragraph.map((sentence, i) => (
        <p
          key={`paragraph-${i}`}
          style={{ marginBottom: lineGap, fontSize: fontSize + 'px', lineHeight: fontSize + 5 + 'px' }}
          className={styles.paragraph}
        >
          {sentence}
        </p>
      ))}
    </>
  );
};
