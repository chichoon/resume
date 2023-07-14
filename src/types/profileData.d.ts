export interface ProfileType {
  name: string;
  nameInEng: string;
  email: string;
  githubUsername: string;
  profileImageRef: string;
  blogLink: string;
  oneLineBio: string;
  summaries: string[];
  stacks: StackType[];
  bioGithubLink: string;
}

interface HistoryType {
  key: string;
  title: string;
  imageRef?: string;
  startDateYear: number;
  startDateMonth: number;
  startDateDay?: number;
  endDateYear?: number;
  endDateMonth?: number;
  endDateDay?: number;
  fakeDateYear?: number;
  fakeDateMonth?: number;
  fakeDateDay?: number;
  summary: string;
  description: DescriptionType[];
}

export interface StackType {
  name: string;
  color: string;
  logo?: string;
}

export interface DescriptionType {
  title: string;
  mainText: string | string[];
  githubLink?: string;
  link?: LinkType[];
}

export interface LinkType {
  title: string;
  link: string;
}

export interface ProjectType extends HistoryType {
  githubLink?: string;
  publishedLink?: string;
  stacks: StackType[];
  technicalSpec?: DescriptionType[];
}

export interface FootprintType extends HistoryType {}

export interface ProjectListType {
  [key: string]: ProjectType;
}

export interface CertificateType {
  key: string;
  title: string;
  year: number;
  month: number;
  score?: string;
}
