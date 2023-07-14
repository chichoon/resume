import { CertificateType, FootprintType, ProfileType, ProjectType } from './profileData';

export interface ResumeProjectListType {
  [key: string]: ResumeProjectType;
}

export interface ResumeProfileType extends Omit<ProfileType, 'summaries' | 'profileImageRef'> {
  resumeImageRef: string;
  resumeSummaries: string[];
}

export interface ResumeProjectType
  extends Omit<ProjectType, 'fakeDateYear' | 'fakeDateMonth' | 'fakeDateDay' | 'description' | 'imageRef'> {
  digest?: DigestType[];
}

export interface ResumeFootprintType
  extends Omit<FootprintType, 'fakeDateYear' | 'fakeDateMonth' | 'fakeDateDay' | 'description' | 'imageRef'> {
  digest?: DigestType[];
}

interface DigestType {
  description: string;
  link?: string[];
}

export interface ResumeCertificateType extends CertificateType {
  isVisible?: boolean;
}
