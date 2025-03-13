'use server'

import { getAuthToken } from '@/data/services/get-token'
import { apiCall } from '@/data/services/api-call'
import { flattenAttributes } from '@/lib/utils'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

interface Payload {
  data: {
    title?: string
    videoId: string
    summary: string
  }
}

export async function createSummaryAction(payload: Payload) {
  const authToken = await getAuthToken()
  if (!authToken) throw new Error('No auth token found')

  const response = await apiCall('/api/summaries', {
    method: 'POST',
    body: payload,
  })

  if (!response.ok) {
    throw new Error(
      'Failed to create summary: ' +
        (response.error?.message || 'Unknown error')
    )
  }

  const flattenedData = flattenAttributes(response.data)
  redirect('/dashboard/summaries/' + flattenedData.documentId)
}

export async function updateSummaryAction(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData)
  const id = rawFormData.id as string

  const payload = {
    data: {
      title: rawFormData.title,
      summary: rawFormData.summary,
    },
  }

  const response = await apiCall(`/api/summaries/${id}`, {
    method: 'PUT',
    body: payload,
  })

  if (!response.ok || !response.data) {
    return {
      ...prevState,
      strapiErrors: null,
      message: 'Oops! Something went wrong. Please try again.',
    }
  }

  if (response.error) {
    return {
      ...prevState,
      strapiErrors: response.error,
      message: 'Failed to update summary.',
    }
  }

  revalidatePath('/dashboard/summaries')

  return {
    ...prevState,
    message: 'Summary updated successfully',
    data: response.data,
    strapiErrors: null,
  }
}

export async function deleteSummaryAction(id: string, prevState: any) {
  const response = await apiCall(`/api/summaries/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    return {
      ...prevState,
      strapiErrors: null,
      message: 'Oops! Something went wrong. Please try again.',
    }
  }

  redirect('/dashboard/summaries')
}
