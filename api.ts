/**
 * Do not edit manually.
 * Api
 * Screen4Hire - AI-powered recruitment platform for multi-corporation use
 * OpenAPI spec version: 0.1.0
 */
import * as zod from 'zod';


/**
 * @summary Health check
 */
export const HealthCheckResponse = zod.object({
  "status": zod.string()
})


/**
 * @summary Get current employer profile
 */
export const GetMyProfileResponse = zod.object({
  "id": zod.number(),
  "clerkUserId": zod.string(),
  "companyName": zod.string(),
  "email": zod.string(),
  "industry": zod.string().nullish(),
  "logoUrl": zod.string().nullish(),
  "createdAt": zod.string()
})


/**
 * @summary Create employer profile on first login
 */



export const CreateMyProfileBody = zod.object({
  "companyName": zod.string().min(1),
  "email": zod.string(),
  "industry": zod.string().optional()
})

export const CreateMyProfileResponse = zod.object({
  "id": zod.number(),
  "clerkUserId": zod.string(),
  "companyName": zod.string(),
  "email": zod.string(),
  "industry": zod.string().nullish(),
  "logoUrl": zod.string().nullish(),
  "createdAt": zod.string()
})


/**
 * @summary Update employer profile
 */



export const UpdateMyProfileBody = zod.object({
  "companyName": zod.string().min(1).optional(),
  "industry": zod.string().optional(),
  "logoUrl": zod.string().optional()
})

export const UpdateMyProfileResponse = zod.object({
  "id": zod.number(),
  "clerkUserId": zod.string(),
  "companyName": zod.string(),
  "email": zod.string(),
  "industry": zod.string().nullish(),
  "logoUrl": zod.string().nullish(),
  "createdAt": zod.string()
})


/**
 * @summary Employer dashboard with pipeline overview
 */
export const GetDashboardResponse = zod.object({
  "totalJobs": zod.number(),
  "activeJobs": zod.number(),
  "totalApplications": zod.number(),
  "pendingScreening": zod.number(),
  "questionnairesSent": zod.number(),
  "finalistsSelected": zod.number(),
  "interviewsCompleted": zod.number(),
  "recentActivity": zod.array(zod.object({
  "type": zod.string(),
  "description": zod.string(),
  "timestamp": zod.string(),
  "jobTitle": zod.string().nullish()
})),
  "jobsSummary": zod.array(zod.object({
  "id": zod.number(),
  "title": zod.string(),
  "status": zod.string(),
  "applications": zod.number(),
  "finalists": zod.number(),
  "interviewed": zod.number()
}))
})


/**
 * @summary List all jobs for the current employer
 */
export const ListJobsResponseItem = zod.object({
  "id": zod.number(),
  "employerId": zod.number(),
  "title": zod.string(),
  "description": zod.string(),
  "department": zod.string().nullish(),
  "location": zod.string().nullish(),
  "salaryRange": zod.string().nullish(),
  "screeningCriteria": zod.string(),
  "maxCandidatesToEmail": zod.number(),
  "status": zod.enum(['draft', 'active', 'closed']),
  "applicationCount": zod.number(),
  "createdAt": zod.string(),
  "updatedAt": zod.string()
})
export const ListJobsResponse = zod.array(ListJobsResponseItem)


/**
 * @summary Create a new job posting
 */



export const createJobBodyMaxCandidatesToEmailMax = 100;



export const CreateJobBody = zod.object({
  "title": zod.string().min(1),
  "description": zod.string().min(1),
  "department": zod.string().optional(),
  "location": zod.string().optional(),
  "salaryRange": zod.string().optional(),
  "screeningCriteria": zod.string().min(1).describe('Criteria used by AI to evaluate and rank candidates'),
  "maxCandidatesToEmail": zod.number().min(1).max(createJobBodyMaxCandidatesToEmailMax),
  "status": zod.enum(['draft', 'active']).optional()
})

export const CreateJobResponse = zod.object({
  "id": zod.number(),
  "employerId": zod.number(),
  "title": zod.string(),
  "description": zod.string(),
  "department": zod.string().nullish(),
  "location": zod.string().nullish(),
  "salaryRange": zod.string().nullish(),
  "screeningCriteria": zod.string(),
  "maxCandidatesToEmail": zod.number(),
  "status": zod.enum(['draft', 'active', 'closed']),
  "applicationCount": zod.number(),
  "createdAt": zod.string(),
  "updatedAt": zod.string()
})


/**
 * @summary Get a job posting
 */
export const GetJobParams = zod.object({
  "id": zod.coerce.number()
})

export const GetJobResponse = zod.object({
  "id": zod.number(),
  "employerId": zod.number(),
  "title": zod.string(),
  "description": zod.string(),
  "department": zod.string().nullish(),
  "location": zod.string().nullish(),
  "salaryRange": zod.string().nullish(),
  "screeningCriteria": zod.string(),
  "maxCandidatesToEmail": zod.number(),
  "status": zod.enum(['draft', 'active', 'closed']),
  "applicationCount": zod.number(),
  "createdAt": zod.string(),
  "updatedAt": zod.string()
})


/**
 * @summary Update a job posting
 */
export const UpdateJobParams = zod.object({
  "id": zod.coerce.number()
})

export const UpdateJobBody = zod.object({
  "title": zod.string().optional(),
  "description": zod.string().optional(),
  "department": zod.string().optional(),
  "location": zod.string().optional(),
  "salaryRange": zod.string().optional(),
  "screeningCriteria": zod.string().optional(),
  "maxCandidatesToEmail": zod.number().optional(),
  "status": zod.enum(['draft', 'active', 'closed']).optional()
})

export const UpdateJobResponse = zod.object({
  "id": zod.number(),
  "employerId": zod.number(),
  "title": zod.string(),
  "description": zod.string(),
  "department": zod.string().nullish(),
  "location": zod.string().nullish(),
  "salaryRange": zod.string().nullish(),
  "screeningCriteria": zod.string(),
  "maxCandidatesToEmail": zod.number(),
  "status": zod.enum(['draft', 'active', 'closed']),
  "applicationCount": zod.number(),
  "createdAt": zod.string(),
  "updatedAt": zod.string()
})


/**
 * @summary Delete a job posting
 */
export const DeleteJobParams = zod.object({
  "id": zod.coerce.number()
})

export const DeleteJobResponse = zod.void()


/**
 * @summary Get pipeline statistics for a job
 */
export const GetJobStatsParams = zod.object({
  "id": zod.coerce.number()
})

export const GetJobStatsResponse = zod.object({
  "jobId": zod.number(),
  "totalApplications": zod.number(),
  "screened": zod.number(),
  "questionnairesSent": zod.number(),
  "responsesReceived": zod.number(),
  "finalistsSelected": zod.number(),
  "interviewsScheduled": zod.number(),
  "interviewsCompleted": zod.number(),
  "averageAiScore": zod.number().nullish()
})


/**
 * @summary List all applications for a job
 */
export const ListApplicationsParams = zod.object({
  "jobId": zod.coerce.number()
})

export const ListApplicationsResponseItem = zod.object({
  "id": zod.number(),
  "jobId": zod.number(),
  "candidateName": zod.string(),
  "email": zod.string(),
  "phone": zod.string().nullish(),
  "resumeFileName": zod.string().nullish(),
  "aiScore": zod.number().nullish(),
  "aiSummary": zod.string().nullish(),
  "status": zod.enum(['new', 'screening', 'questionnaire_sent', 'questionnaire_responded', 'finalist', 'interview_scheduled', 'interview_completed', 'hired', 'rejected']),
  "employerNotes": zod.string().nullish(),
  "createdAt": zod.string()
})
export const ListApplicationsResponse = zod.array(ListApplicationsResponseItem)


/**
 * @summary Submit a new application (resume as text or base64 PDF)
 */
export const CreateApplicationParams = zod.object({
  "jobId": zod.coerce.number()
})




export const CreateApplicationBody = zod.object({
  "candidateName": zod.string().min(1),
  "email": zod.string(),
  "phone": zod.string().optional(),
  "resumeText": zod.string().optional().describe('Plain text resume content'),
  "resumeBase64": zod.string().optional().describe('Base64-encoded PDF resume'),
  "resumeFileName": zod.string().optional()
})

export const CreateApplicationResponse = zod.object({
  "id": zod.number(),
  "jobId": zod.number(),
  "candidateName": zod.string(),
  "email": zod.string(),
  "phone": zod.string().nullish(),
  "resumeFileName": zod.string().nullish(),
  "aiScore": zod.number().nullish(),
  "aiSummary": zod.string().nullish(),
  "status": zod.enum(['new', 'screening', 'questionnaire_sent', 'questionnaire_responded', 'finalist', 'interview_scheduled', 'interview_completed', 'hired', 'rejected']),
  "employerNotes": zod.string().nullish(),
  "createdAt": zod.string()
})


/**
 * @summary Get a single application with full details
 */
export const GetApplicationParams = zod.object({
  "id": zod.coerce.number()
})

export const GetApplicationResponse = zod.object({
  "id": zod.number(),
  "jobId": zod.number(),
  "candidateName": zod.string(),
  "email": zod.string(),
  "phone": zod.string().nullish(),
  "resumeText": zod.string().nullish(),
  "resumeFileName": zod.string().nullish(),
  "aiScore": zod.number().nullish(),
  "aiSummary": zod.string().nullish(),
  "aiStrengths": zod.string().nullish(),
  "aiWeaknesses": zod.string().nullish(),
  "status": zod.string(),
  "employerNotes": zod.string().nullish(),
  "createdAt": zod.string(),
  "job": zod.object({
  "id": zod.number(),
  "employerId": zod.number(),
  "title": zod.string(),
  "description": zod.string(),
  "department": zod.string().nullish(),
  "location": zod.string().nullish(),
  "salaryRange": zod.string().nullish(),
  "screeningCriteria": zod.string(),
  "maxCandidatesToEmail": zod.number(),
  "status": zod.enum(['draft', 'active', 'closed']),
  "applicationCount": zod.number(),
  "createdAt": zod.string(),
  "updatedAt": zod.string()
})
})


/**
 * @summary Update application status or notes
 */
export const UpdateApplicationParams = zod.object({
  "id": zod.coerce.number()
})

export const UpdateApplicationBody = zod.object({
  "status": zod.enum(['new', 'screening', 'questionnaire_sent', 'questionnaire_responded', 'finalist', 'interview_scheduled', 'interview_completed', 'hired', 'rejected']).optional(),
  "employerNotes": zod.string().optional()
})

export const UpdateApplicationResponse = zod.object({
  "id": zod.number(),
  "jobId": zod.number(),
  "candidateName": zod.string(),
  "email": zod.string(),
  "phone": zod.string().nullish(),
  "resumeFileName": zod.string().nullish(),
  "aiScore": zod.number().nullish(),
  "aiSummary": zod.string().nullish(),
  "status": zod.enum(['new', 'screening', 'questionnaire_sent', 'questionnaire_responded', 'finalist', 'interview_scheduled', 'interview_completed', 'hired', 'rejected']),
  "employerNotes": zod.string().nullish(),
  "createdAt": zod.string()
})


/**
 * @summary Delete an application
 */
export const DeleteApplicationParams = zod.object({
  "id": zod.coerce.number()
})

export const DeleteApplicationResponse = zod.void()


/**
 * @summary Run AI screening on all applications for a job
 */
export const ScreenApplicationsParams = zod.object({
  "jobId": zod.coerce.number()
})

export const ScreenApplicationsResponse = zod.object({
  "screened": zod.number(),
  "message": zod.string(),
  "applications": zod.array(zod.object({
  "id": zod.number(),
  "jobId": zod.number(),
  "candidateName": zod.string(),
  "email": zod.string(),
  "phone": zod.string().nullish(),
  "resumeFileName": zod.string().nullish(),
  "aiScore": zod.number().nullish(),
  "aiSummary": zod.string().nullish(),
  "status": zod.enum(['new', 'screening', 'questionnaire_sent', 'questionnaire_responded', 'finalist', 'interview_scheduled', 'interview_completed', 'hired', 'rejected']),
  "employerNotes": zod.string().nullish(),
  "createdAt": zod.string()
}))
})


/**
 * @summary Send email questionnaires to top candidates selected by employer criteria
 */
export const SendQuestionnairesParams = zod.object({
  "jobId": zod.coerce.number()
})





export const SendQuestionnairesBody = zod.object({
  "count": zod.number().min(1).describe('How many top-ranked candidates to send the questionnaire to'),
  "questions": zod.array(zod.string()).min(1).describe('Questions to ask in the email questionnaire'),
  "deadline": zod.string().optional().describe('ISO date string for response deadline')
})

export const SendQuestionnairesResponse = zod.object({
  "sent": zod.number(),
  "message": zod.string()
})


/**
 * @summary AI selects 3-5 finalists based on questionnaire responses
 */
export const SelectFinalistsParams = zod.object({
  "jobId": zod.coerce.number()
})

export const SelectFinalistsResponseItem = zod.object({
  "id": zod.number(),
  "jobId": zod.number(),
  "candidateName": zod.string(),
  "email": zod.string(),
  "phone": zod.string().nullish(),
  "resumeFileName": zod.string().nullish(),
  "aiScore": zod.number().nullish(),
  "aiSummary": zod.string().nullish(),
  "status": zod.enum(['new', 'screening', 'questionnaire_sent', 'questionnaire_responded', 'finalist', 'interview_scheduled', 'interview_completed', 'hired', 'rejected']),
  "employerNotes": zod.string().nullish(),
  "createdAt": zod.string()
})
export const SelectFinalistsResponse = zod.array(SelectFinalistsResponseItem)


/**
 * @summary Get questionnaire for a candidate (public, via token)
 */
export const GetQuestionnaireParams = zod.object({
  "token": zod.coerce.string()
})

export const GetQuestionnaireResponse = zod.object({
  "token": zod.string(),
  "candidateName": zod.string(),
  "companyName": zod.string(),
  "jobTitle": zod.string(),
  "questions": zod.array(zod.string()),
  "deadline": zod.string().nullish(),
  "alreadySubmitted": zod.boolean()
})


/**
 * @summary Candidate submits questionnaire responses
 */
export const SubmitQuestionnaireParams = zod.object({
  "token": zod.coerce.string()
})




export const SubmitQuestionnaireBody = zod.object({
  "answers": zod.array(zod.string()).min(1)
})

export const SubmitQuestionnaireResponse = zod.object({
  "success": zod.boolean(),
  "message": zod.string()
})


/**
 * @summary Get questionnaire and response for an application (employer view)
 */
export const GetApplicationQuestionnaireParams = zod.object({
  "id": zod.coerce.number()
})

export const GetApplicationQuestionnaireResponse = zod.object({
  "id": zod.number(),
  "applicationId": zod.number(),
  "token": zod.string(),
  "questions": zod.array(zod.string()),
  "sentAt": zod.string().nullish(),
  "deadline": zod.string().nullish(),
  "status": zod.enum(['pending', 'sent', 'responded', 'expired']),
  "response": zod.object({
  "answers": zod.array(zod.string()).optional(),
  "aiScore": zod.number().nullish(),
  "aiAnalysis": zod.string().nullish(),
  "submittedAt": zod.string().nullish()
}).nullish()
})


/**
 * @summary List configured interview questions for a job
 */
export const ListInterviewQuestionsParams = zod.object({
  "jobId": zod.coerce.number()
})

export const ListInterviewQuestionsResponseItem = zod.object({
  "id": zod.number(),
  "jobId": zod.number(),
  "questionText": zod.string(),
  "orderIndex": zod.number(),
  "responseScript": zod.string().nullish().describe('Pre-written employer response the AI avatar delivers after the candidate answers'),
  "createdAt": zod.string()
})
export const ListInterviewQuestionsResponse = zod.array(ListInterviewQuestionsResponseItem)


/**
 * @summary Add an interview question
 */
export const CreateInterviewQuestionParams = zod.object({
  "jobId": zod.coerce.number()
})




export const CreateInterviewQuestionBody = zod.object({
  "questionText": zod.string().min(1),
  "orderIndex": zod.number(),
  "responseScript": zod.string().optional()
})

export const CreateInterviewQuestionResponse = zod.object({
  "id": zod.number(),
  "jobId": zod.number(),
  "questionText": zod.string(),
  "orderIndex": zod.number(),
  "responseScript": zod.string().nullish().describe('Pre-written employer response the AI avatar delivers after the candidate answers'),
  "createdAt": zod.string()
})


/**
 * @summary Update an interview question
 */
export const UpdateInterviewQuestionParams = zod.object({
  "id": zod.coerce.number()
})

export const UpdateInterviewQuestionBody = zod.object({
  "questionText": zod.string().optional(),
  "orderIndex": zod.number().optional(),
  "responseScript": zod.string().optional()
})

export const UpdateInterviewQuestionResponse = zod.object({
  "id": zod.number(),
  "jobId": zod.number(),
  "questionText": zod.string(),
  "orderIndex": zod.number(),
  "responseScript": zod.string().nullish().describe('Pre-written employer response the AI avatar delivers after the candidate answers'),
  "createdAt": zod.string()
})


/**
 * @summary Delete an interview question
 */
export const DeleteInterviewQuestionParams = zod.object({
  "id": zod.coerce.number()
})

export const DeleteInterviewQuestionResponse = zod.void()


/**
 * @summary Get interview session for an application
 */
export const GetInterviewSessionParams = zod.object({
  "id": zod.coerce.number()
})

export const GetInterviewSessionResponse = zod.object({
  "id": zod.number(),
  "applicationId": zod.number(),
  "heygenSessionId": zod.string().nullish(),
  "status": zod.enum(['pending', 'active', 'completed', 'failed']),
  "transcript": zod.array(zod.object({
  "role": zod.string().optional(),
  "content": zod.string().optional(),
  "time": zod.string().optional()
})).nullish(),
  "notes": zod.string().nullish(),
  "completedAt": zod.string().nullish(),
  "createdAt": zod.string()
})


/**
 * @summary Create (schedule) an interview session for a finalist
 */
export const CreateInterviewSessionParams = zod.object({
  "id": zod.coerce.number()
})

export const CreateInterviewSessionResponse = zod.object({
  "id": zod.number(),
  "applicationId": zod.number(),
  "heygenSessionId": zod.string().nullish(),
  "status": zod.enum(['pending', 'active', 'completed', 'failed']),
  "transcript": zod.array(zod.object({
  "role": zod.string().optional(),
  "content": zod.string().optional(),
  "time": zod.string().optional()
})).nullish(),
  "notes": zod.string().nullish(),
  "completedAt": zod.string().nullish(),
  "createdAt": zod.string()
})


/**
 * @summary Start HeyGen streaming session and get access token
 */
export const StartInterviewSessionParams = zod.object({
  "id": zod.coerce.number()
})

export const StartInterviewSessionResponse = zod.object({
  "sessionId": zod.string(),
  "token": zod.string(),
  "realtimeEndpoint": zod.string()
})


/**
 * @summary Save transcript and notes after interview completes
 */
export const SaveInterviewTranscriptParams = zod.object({
  "id": zod.coerce.number()
})

export const SaveInterviewTranscriptBody = zod.object({
  "transcript": zod.array(zod.object({
  "role": zod.string().optional(),
  "content": zod.string().optional(),
  "time": zod.string().optional()
})).optional(),
  "notes": zod.string().optional(),
  "status": zod.enum(['completed', 'failed']).optional()
})

export const SaveInterviewTranscriptResponse = zod.object({
  "id": zod.number(),
  "applicationId": zod.number(),
  "heygenSessionId": zod.string().nullish(),
  "status": zod.enum(['pending', 'active', 'completed', 'failed']),
  "transcript": zod.array(zod.object({
  "role": zod.string().optional(),
  "content": zod.string().optional(),
  "time": zod.string().optional()
})).nullish(),
  "notes": zod.string().nullish(),
  "completedAt": zod.string().nullish(),
  "createdAt": zod.string()
})


