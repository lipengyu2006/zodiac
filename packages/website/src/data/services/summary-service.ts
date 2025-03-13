import { apiCall } from '@/data/services/api-call'

export async function generateSummaryService(videoId: string) {
  const response = await apiCall(
    '/api/summarize',
    {
      method: 'POST',
      body: { videoId },
    },
    false,
    true
  )

  return response
}
