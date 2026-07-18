/**
 * Do not edit manually.
 * Api
 * Screen4Hire - AI-powered recruitment platform for multi-corporation use
 * OpenAPI spec version: 0.1.0
 */
export interface HealthStatus {
  status: string;
}

export interface Employer {
  id: number;
  clerkUserId: string;
  companyName: string;
  email: string;
  /** @nullable */
  industry?: string | null;
  /** @nullable */
  logoUrl?: string | null;
  createdAt: string;
}

export interface EmployerInput {
  /** @minLength 1 */
  companyName: string;
  email: string;
  industry?: string;
}

export interface EmployerUpdate {
  /** @minLength 1 */
  companyName?: string;
  industry?: string;
  logoUrl?: string;
}

export interface ActivityItem {
  type: string;
  description: string;
  timestamp: string;
  /** @nullable */
  jobTitle?: string | null;
}

export interface JobSummary {
  id: number;
  title: string;
  status: string;
  applications: number;
  finalists: number;
  interviewed: number;
}

export interface Dashboard {
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  pendingScreening: number;
  questionnairesSent: number;
  finalistsSelected: number;
  interviewsCompleted: number;
  recentActivity: ActivityItem[];
  jobsSummary: JobSummary[];
}

export type JobStatus = typeof JobStatus[keyof typeof JobStatus];


export const JobStatus = {
  draft: 'draft',
  active: 'active',
  closed: 'closed',
} as const;

export interface Job {
  id: number;
  employerId: number;
  title: string;
  description: string;
  /** @nullable */
  department?: string | null;
  /** @nullable */
  location?: string | null;
  /** @nullable */
  salaryRange?: string | null;
  screeningCriteria: string;
  maxCandidatesToEmail: number;
  status: JobStatus;
  applicationCount: number;
  createdAt: string;
  updatedAt: string;
}

export type JobInputStatus = typeof JobInputStatus[keyof typeof JobInputStatus];


export const JobInputStatus = {
  draft: 'draft',
  active: 'active',
} as const;

export interface JobInput {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  description: string;
  department?: string;
  location?: string;
  salaryRange?: string;
  /**
     * Criteria used by AI to evaluate and rank candidates
     * @minLength 1
     */
  screeningCriteria: string;
  /**
     * @minimum 1
     * @maximum 100
     */
  maxCandidatesToEmail: number;
  status?: JobInputStatus;
}

export type JobUpdateStatus = typeof JobUpdateStatus[keyof typeof JobUpdateStatus];


export const JobUpdateStatus = {
  draft: 'draft',
  active: 'active',
  closed: 'closed',
} as const;

export interface JobUpdate {
  title?: string;
  description?: string;
  department?: string;
  location?: string;
  salaryRange?: string;
  screeningCriteria?: string;
  maxCandidatesToEmail?: number;
  status?: JobUpdateStatus;
}

export interface JobStats {
  jobId: number;
  totalApplications: number;
  screened: number;
  questionnairesSent: number;
  responsesReceived: number;
  finalistsSelected: number;
  interviewsScheduled: number;
  interviewsCompleted: number;
  /** @nullable */
  averageAiScore?: number | null;
}

export type ApplicationStatus = typeof ApplicationStatus[keyof typeof ApplicationStatus];


export const ApplicationStatus = {
  new: 'new',
  screening: 'screening',
  questionnaire_sent: 'questionnaire_sent',
  questionnaire_responded: 'questionnaire_responded',
  finalist: 'finalist',
  interview_scheduled: 'interview_scheduled',
  interview_completed: 'interview_completed',
  hired: 'hired',
  rejected: 'rejected',
} as const;

export interface Application {
  id: number;
  jobId: number;
  candidateName: string;
  email: string;
  /** @nullable */
  phone?: string | null;
  /** @nullable */
  resumeFileName?: string | null;
  /** @nullable */
  aiScore?: number | null;
  /** @nullable */
  aiSummary?: string | null;
  status: ApplicationStatus;
  /** @nullable */
  employerNotes?: string | null;
  createdAt: string;
}

export interface ApplicationDetail {
  id: number;
  jobId: number;
  candidateName: string;
  email: string;
  /** @nullable */
  phone?: string | null;
  /** @nullable */
  resumeText?: string | null;
  /** @nullable */
  resumeFileName?: string | null;
  /** @nullable */
  aiScore?: number | null;
  /** @nullable */
  aiSummary?: string | null;
  /** @nullable */
  aiStrengths?: string | null;
  /** @nullable */
  aiWeaknesses?: string | null;
  status: string;
  /** @nullable */
  employerNotes?: string | null;
  createdAt: string;
  job: Job;
}

export interface ApplicationInput {
  /** @minLength 1 */
  candidateName: string;
  email: string;
  phone?: string;
  /** Plain text resume content */
  resumeText?: string;
  /** Base64-encoded PDF resume */
  resumeBase64?: string;
  resumeFileName?: string;
}

export type ApplicationUpdateStatus = typeof ApplicationUpdateStatus[keyof typeof ApplicationUpdateStatus];


export const ApplicationUpdateStatus = {
  new: 'new',
  screening: 'screening',
  questionnaire_sent: 'questionnaire_sent',
  questionnaire_responded: 'questionnaire_responded',
  finalist: 'finalist',
  interview_scheduled: 'interview_scheduled',
  interview_completed: 'interview_completed',
  hired: 'hired',
  rejected: 'rejected',
} as const;

export interface ApplicationUpdate {
  status?: ApplicationUpdateStatus;
  employerNotes?: string;
}

export interface ScreeningResult {
  screened: number;
  message: string;
  applications: Application[];
}

export interface SendQuestionnaireInput {
  /**
     * How many top-ranked candidates to send the questionnaire to
     * @minimum 1
     */
  count: number;
  /**
     * Questions to ask in the email questionnaire
     * @minItems 1
     */
  questions: string[];
  /** ISO date string for response deadline */
  deadline?: string;
}

export interface SendQuestionnaireResult {
  sent: number;
  message: string;
}

export interface QuestionnairePublic {
  token: string;
  candidateName: string;
  companyName: string;
  jobTitle: string;
  questions: string[];
  /** @nullable */
  deadline?: string | null;
  alreadySubmitted: boolean;
}

export interface QuestionnaireResponseInput {
  /** @minItems 1 */
  answers: string[];
}

export interface QuestionnaireSubmitResult {
  success: boolean;
  message: string;
}

export type QuestionnaireDetailStatus = typeof QuestionnaireDetailStatus[keyof typeof QuestionnaireDetailStatus];


export const QuestionnaireDetailStatus = {
  pending: 'pending',
  sent: 'sent',
  responded: 'responded',
  expired: 'expired',
} as const;

/**
 * @nullable
 */
export type QuestionnaireDetailResponse = {
  answers?: string[];
  /** @nullable */
  aiScore?: number | null;
  /** @nullable */
  aiAnalysis?: string | null;
  /** @nullable */
  submittedAt?: string | null;
} | null;

export interface QuestionnaireDetail {
  id: number;
  applicationId: number;
  token: string;
  questions: string[];
  /** @nullable */
  sentAt?: string | null;
  /** @nullable */
  deadline?: string | null;
  status: QuestionnaireDetailStatus;
  /** @nullable */
  response?: QuestionnaireDetailResponse;
}

export interface InterviewQuestion {
  id: number;
  jobId: number;
  questionText: string;
  orderIndex: number;
  /**
     * Pre-written employer response the AI avatar delivers after the candidate answers
     * @nullable
     */
  responseScript?: string | null;
  createdAt: string;
}

export interface InterviewQuestionInput {
  /** @minLength 1 */
  questionText: string;
  orderIndex: number;
  responseScript?: string;
}

export interface InterviewQuestionUpdate {
  questionText?: string;
  orderIndex?: number;
  responseScript?: string;
}

export type InterviewSessionStatus = typeof InterviewSessionStatus[keyof typeof InterviewSessionStatus];


export const InterviewSessionStatus = {
  pending: 'pending',
  active: 'active',
  completed: 'completed',
  failed: 'failed',
} as const;

export type InterviewSessionTranscriptItem = {
  role?: string;
  content?: string;
  time?: string;
};

export interface InterviewSession {
  id: number;
  applicationId: number;
  /** @nullable */
  heygenSessionId?: string | null;
  status: InterviewSessionStatus;
  /** @nullable */
  transcript?: InterviewSessionTranscriptItem[] | null;
  /** @nullable */
  notes?: string | null;
  /** @nullable */
  completedAt?: string | null;
  createdAt: string;
}

export interface InterviewSessionToken {
  sessionId: string;
  token: string;
  realtimeEndpoint: string;
}

export type TranscriptInputTranscriptItem = {
  role?: string;
  content?: string;
  time?: string;
};

export type TranscriptInputStatus = typeof TranscriptInputStatus[keyof typeof TranscriptInputStatus];


export const TranscriptInputStatus = {
  completed: 'completed',
  failed: 'failed',
} as const;

export interface TranscriptInput {
  transcript?: TranscriptInputTranscriptItem[];
  notes?: string;
  status?: TranscriptInputStatus;
}

