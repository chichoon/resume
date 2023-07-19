export interface ProfileType {
  name: string;
  nameInEng: string;
  email: string;
  profileSrc: string;
  job: string;
  githubUsername: string;
  blogLink: string;
  summaries: string[];
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
  summary: string;
  digest: DigestType[];
}
interface DigestType {
  description: string;
  link?: string[];
  githubLink?: string[];
}

export interface LinkType {
  title: string;
  link: string;
}

export interface ProjectType extends HistoryType {
  githubLink?: string;
  publishedLink?: string;
  stacks: string[];
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
  day?: number;
  score?: string;
  isVisible?: boolean;
}
