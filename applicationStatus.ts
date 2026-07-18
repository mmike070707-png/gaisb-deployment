/**
 * Do not edit manually.
 * Api
 * Screen4Hire - AI-powered recruitment platform for multi-corporation use
 * OpenAPI spec version: 0.1.0
 */

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
