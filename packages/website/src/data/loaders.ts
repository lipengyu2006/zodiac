import { getAuthToken } from './services/get-token'
import qs from 'qs'

import { flattenAttributes, getStrapiURL } from '@/lib/utils'

const baseUrl = getStrapiURL()

async function fetchData(url: string) {
  const authToken = await getAuthToken()

  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  }

  try {
    const response = await fetch(url, authToken ? headers : {})
    const data = await response.json()
    return flattenAttributes(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error // or return null;
  }
}

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
  const url = new URL('/api/summaries', baseUrl)
  url.search = query
  return fetchData(url.href)
}

export async function getSummaryById(summaryId: string) {
  return fetchData(`${baseUrl}/api/summaries/${summaryId}`)
}
