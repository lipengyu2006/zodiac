import { flattenAttributes } from '@/lib/utils'
import { apiCall } from '@/data/services/api-call'

export async function fileDeleteService(imageId: string) {
  const response = await apiCall(`/api/upload/files/${imageId}`, {
    method: 'DELETE',
  })

  if (!response.ok) throw response.error
  return flattenAttributes(response.data)
}

export async function fileUploadService(image: any) {
  const formData = new FormData()
  formData.append('files', image, image.name)

  const response = await apiCall('/api/upload', {
    method: 'POST',
    formData,
  })

  if (!response.ok) throw response.error
  return response.data
}
