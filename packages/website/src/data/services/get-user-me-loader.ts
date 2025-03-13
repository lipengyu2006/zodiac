import { apiCall } from '@/data/services/api-call'
import qs from 'qs'

const query = qs.stringify({
  populate: { image: { fields: ['url', 'alternativeText'] } },
})

export async function getUserMeLoader() {
  return await apiCall('/api/users/me', {
    method: 'GET',
    cache: 'no-cache',
    query, // 添加查询参数
  })
}
