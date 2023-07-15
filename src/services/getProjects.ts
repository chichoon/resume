import { ProjectListType } from '@/types/profileData';

import projects from '@/assets/data/projectsInfo.json';

export async function getProjects() {
  const projectList = projects as ProjectListType;
  const data = await new Promise<ProjectListType>((resolve) => {
    resolve(projectList);
  });

  return data;
}
