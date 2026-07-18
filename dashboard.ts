/**
 * Do not edit manually.
 * Api
 * Screen4Hire - AI-powered recruitment platform for multi-corporation use
 * OpenAPI spec version: 0.1.0
 */
import type { ActivityItem } from './activityItem';
import type { JobSummary } from './jobSummary';

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
