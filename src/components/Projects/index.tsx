import { ProjectListType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';
import { Section } from '../Section';

import styles from './projects.module.scss';

interface Props {
  projectData: ProjectListType;
}

export const Projects = ({ projectData }: Props) => {
  const projectKeys = Object.keys(projectData);
  return (
    <Section title='프로젝트'>
      <ul className={styles.projectsWrapper}>
        {projectKeys.map(
          (projectKey, index) =>
            projectData[projectKey].digest && (
              <ProjectElement project={projectData[projectKey]} key={`project-${index}`} />
            )
        )}
      </ul>
    </Section>
  );
};
