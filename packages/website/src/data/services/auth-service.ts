import { apiCall } from '@/data/services/api-call'

interface RegisterUserProps {
  username: string
  password: string
  email: string
}

interface LoginUserProps {
  identifier: string
  password: string
}

export async function registerUserService(userData: RegisterUserProps) {
  const response = await apiCall(
    '/api/auth/local/register',
    {
      method: 'POST',
      body: userData,
      cache: 'no-cache',
    },
    false
  )

  if (!response.ok) {
    console.error('Registration Service Error:', response.error)
  }

  return response.data
}

export async function loginUserService(userData: LoginUserProps) {
  const response = await apiCall(
    '/api/auth/local',
    {
      method: 'POST',
      body: userData,
      cache: 'no-cache',
    },
    false
  )

  if (!response.ok) {
    console.error('Login Service Error:', response.error)
    throw response.error
  }

  return response.data
}
