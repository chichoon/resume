import { ProjectType } from '@/types/profileData';
import { getPeriodString } from '@/utils';
import { LinkButton, GithubButton } from '../Buttons';
import { BadgeList } from '../BadgeList';
import { Digest } from '../Digest';

import styles from './projectElement.module.scss';

interface Props {
  project: ProjectType;
}

export const ProjectElement = ({ project }: Props) => {
  const { startDateYear, startDateMonth, startDateDay, endDateYear, endDateMonth, endDateDay } = project;

  const periodString = getPeriodString({
    startDateYear,
    startDateMonth,
    startDateDay,
    endDateYear,
    endDateMonth,
    endDateDay,
  });

  return (
    <li className={styles.projectWrapper}>
      <div className={styles.iconAndImageWrapper}>
        <h3>{project.title}</h3>
        <span>{periodString}</span>
        <div className={styles.linkWrapper}>
          {project.githubLink && <GithubButton href={project.githubLink} size={20} />}
          {project.publishedLink && <LinkButton href={project.publishedLink} size={20} />}
        </div>
      </div>
      <div className={styles.digestWrapper}>
        <span>{project.summary}</span>
        <BadgeList stacks={project.stacks} className={styles.badgeWrapper} />
        {project.digest && <Digest elementKey={project.key} digest={project.digest} className={styles.projectDigest} />}
      </div>
    </li>
  );
};
