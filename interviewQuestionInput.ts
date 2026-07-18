/**
 * Do not edit manually.
 * Api
 * Screen4Hire - AI-powered recruitment platform for multi-corporation use
 * OpenAPI spec version: 0.1.0
 */

export interface InterviewQuestionInput {
  /** @minLength 1 */
  questionText: string;
  orderIndex: number;
  responseScript?: string;
}
