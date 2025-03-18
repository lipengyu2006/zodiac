import { apiCall } from '@/data/services/api-call'
import qs from 'qs'

const query = qs.stringify({
  populate: { image: { fields: ['url', 'alternativeText'] } },
})

export async function getUserMeLoader() {
  if (
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PHASE === 'phase-production-build'
  ) {
    return { ok: true, data: { id: 'mock', image: null }, error: null } // 模拟数据
  }
  return await apiCall('/api/users/me', {
    method: 'GET',
    cache: 'no-cache',
    query,
  })
}
