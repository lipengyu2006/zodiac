'use server'
import { z } from 'zod'

import { getUserMeLoader } from '@/data/services/get-user-me-loader'
import { apiCall } from '@/data/services/api-call'
import { flattenAttributes } from '@/lib/utils'

import {
  fileDeleteService,
  fileUploadService,
} from '@/data/services/file-service'

export async function updateProfileAction(
  userId: string,
  prevState: any,
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData)

  const payload = {
    firstName: rawFormData.firstName,
    lastName: rawFormData.lastName,
    bio: rawFormData.bio,
  }

  const response = await apiCall(`/api/users/${userId}`, {
    method: 'PUT',
    body: payload,
    query: {
      populate: '*',
    },
  })

  if (!response.ok || !response.data) {
    return {
      ...prevState,
      strapiErrors: null,
      message: 'Ops! Something went wrong. Please try again.',
    }
  }

  if (response.error) {
    return {
      ...prevState,
      strapiErrors: response.error,
      message: 'Failed to Update Profile.',
    }
  }

  const flattenedData = flattenAttributes(response.data)

  return {
    ...prevState,
    message: 'Profile Updated',
    data: flattenedData,
    strapiErrors: null,
  }
}

const MAX_FILE_SIZE = 5000000

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

// VALIDATE IMAGE WITH ZOD
const imageSchema = z.object({
  image: z
    .any()
    .refine((file) => {
      if (file.size === 0 || file.name === undefined) return false
      else return true
    }, 'Please update or add new image.')

    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    )
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`),
})

export async function uploadProfileImageAction(
  imageId: string,
  prevState: any,
  formData: FormData
) {
  // GET THE LOGGED IN USER
  const user = await getUserMeLoader()
  if (!user.ok)
    throw new Error('You are not authorized to perform this action.')

  const userId = user.data.id

  // CONVERT FORM DATA TO OBJECT
  const data = Object.fromEntries(formData)

  // VALIDATE THE IMAGE
  const validatedFields = imageSchema.safeParse({
    image: data.image,
  })

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      data: null,
      message: 'Invalid Image',
    }
  }

  // DELETE PREVIOUS IMAGE IF EXISTS
  if (imageId) {
    try {
      await fileDeleteService(imageId)
    } catch (error) {
      return {
        ...prevState,
        strapiErrors: null,
        zodErrors: null,
        message: 'Failed to Delete Previous Image.',
      }
    }
  }

  // UPLOAD NEW IMAGE TO MEDIA LIBRARY
  const fileUploadResponse = await fileUploadService(data.image)

  if (!fileUploadResponse) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: 'Ops! Something went wrong. Please try again.',
    }
  }

  if (fileUploadResponse.error) {
    return {
      ...prevState,
      strapiErrors: fileUploadResponse.error,
      zodErrors: null,
      message: 'Failed to Upload File.',
    }
  }
  const updatedImageId = fileUploadResponse[0].id
  const payload = { image: updatedImageId }

  // UPDATE USER PROFILE WITH NEW IMAGE
  const updateImageResponse = await apiCall(`/api/users/${userId}`, {
    method: 'PUT',
    body: payload,
  })

  if (!updateImageResponse.ok) {
    return {
      ...prevState,
      strapiErrors: updateImageResponse.error,
      zodErrors: null,
      message: 'Failed to Update Profile with New Image.',
    }
  }

  const flattenedData = flattenAttributes(updateImageResponse.data)

  return {
    ...prevState,
    data: flattenedData,
    zodErrors: null,
    strapiErrors: null,
    message: 'Image Uploaded',
  }
}
