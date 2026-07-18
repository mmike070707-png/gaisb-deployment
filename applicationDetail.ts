/**
 * Do not edit manually.
 * Api
 * Screen4Hire - AI-powered recruitment platform for multi-corporation use
 * OpenAPI spec version: 0.1.0
 */
import type { Job } from './jobs';

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
