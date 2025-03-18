import qs from 'qs'
import {
  getStrapiUrlWithBasePath,
  getNextUrlWithBasePath,
  getStrapiURL,
  getFrontendURL,
} from '@/lib/utils'
import { getAuthToken } from '@/data/services/get-token'

// 配置和类型定义
interface ApiResponse<T = any> {
  ok: boolean
  data: T | null
  error: any | null
}

interface FetchOptions {
  method: string
  headers?: Record<string, string>
  body?: any
  cache?: RequestCache
  formData?: FormData
  query?: Record<string, any> | string // 添加查询参数支持
}

// 基础API调用函数
export async function apiCall<T = any>(
  path: string,
  options: FetchOptions,
  requiresAuth: boolean = true,
  isFrountend: boolean = false
): Promise<ApiResponse<T>> {
  const baseUrl = isFrountend ? getFrontendURL() : getStrapiURL()
  const url = isFrountend
    ? getNextUrlWithBasePath(path, baseUrl)
    : getStrapiUrlWithBasePath(path, baseUrl)
  // 处理查询参数
  if (options.query) {
    if (typeof options.query === 'string') {
      // 如果已经是字符串形式的查询参数
      url.search = options.query
    } else {
      // 如果是对象，使用qs转换
      url.search = qs.stringify(options.query)
    }
  }

  // 准备headers
  const headers: Record<string, string> = {
    ...options.headers,
  }

  // 添加认证token (如果需要)
  if (requiresAuth) {
    const authToken = await getAuthToken()
    if (!authToken) {
      return { ok: false, data: null, error: 'No auth token found' }
    }
    headers['Authorization'] = `Bearer ${authToken}`
  }

  // 如果不是FormData，添加Content-Type
  if (!options.formData) {
    headers['Content-Type'] = 'application/json'
  }

  try {
    // 准备fetch参数
    const fetchOptions: RequestInit = {
      method: options.method,
      headers,
      cache: options.cache,
    }

    if (!options.cache) delete fetchOptions.cache

    // 根据请求类型处理body
    if (options.formData) {
      fetchOptions.body = options.formData
    } else if (options.body) {
      fetchOptions.body = JSON.stringify({ ...options.body })
    }

    // 执行请求
    const response = await fetch(url, fetchOptions)

    // DELETE操作特殊处理
    if (options.method === 'DELETE') {
      return { ok: response.ok, data: response.ok as any, error: null }
    }

    // 解析响应
    if (response.ok) {
      const data = await response.json()
      return { ok: true, data, error: null }
    } else {
      const errorData = await response
        .json()
        .catch(() => ({ message: 'Unknown error' }))
      return { ok: false, data: null, error: errorData }
    }
  } catch (error) {
    console.error(`API Error (${path}):`, error)
    return {
      ok: false,
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
