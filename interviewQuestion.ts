/**
 * Do not edit manually.
 * Api
 * Screen4Hire - AI-powered recruitment platform for multi-corporation use
 * OpenAPI spec version: 0.1.0
 */

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
