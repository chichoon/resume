import { ResumeProjectListType } from '@/types/resumeData';
import { ProjectComponent } from './ProjectComponent';
import { Section } from '../Section';

import styles from './resumeProjects.module.scss';

interface Props {
  projectData: ResumeProjectListType;
}

export const ResumeProjects = ({ projectData }: Props) => {
  const projectKeys = Object.keys(projectData);
  return (
    <Section title='프로젝트'>
      <ul className={styles.projectsWrapper}>
        {projectKeys.map(
          (projectKey, index) =>
            projectData[projectKey].digest && (
              <ProjectComponent project={projectData[projectKey]} key={`project-${index}`} />
            )
        )}
      </ul>
    </Section>
  );
};
