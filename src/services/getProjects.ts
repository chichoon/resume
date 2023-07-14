import { ResumeProjectListType } from '@/types/resumeData';

import projects from '@/assets/data/projectsInfo.json';

export async function getProjects() {
  const projectList = projects as ResumeProjectListType;
  const data = await new Promise<ResumeProjectListType>((resolve) => {
    resolve(projectList);
  });

  return data;
}
