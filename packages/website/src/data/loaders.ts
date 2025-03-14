import { apiCall } from '@/data/services/api-call'
import qs from 'qs'

import { flattenAttributes } from '@/lib/utils'

export async function getSummaries(queryString: string, currentPage: number) {
  const PAGE_SIZE = 2
  const query = qs.stringify({
    sort: ['createdAt:desc'],
    filters: {
      $or: [
        { title: { $containsi: queryString } },
        { summary: { $containsi: queryString } },
      ],
    },
    pagination: {
      pageSize: PAGE_SIZE,
      page: currentPage,
    },
  })
  const response = await apiCall('/api/summaries', {
    method: 'GET',
    query,
  })
  return flattenAttributes(response.data)
}

export async function getSummaryById(summaryId: string) {
  const response = await apiCall(`/api/summaries/${summaryId}`, {
    method: 'GET',
  })
  return flattenAttributes(response.data)
}
