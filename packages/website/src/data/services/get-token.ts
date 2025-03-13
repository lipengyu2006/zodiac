export async function getAuthToken(): Promise<string | null> {
  // 检测是否在服务器端
  if (typeof window === 'undefined') {
    try {
      // 尝试动态导入
      const headers = await import('next/headers')
      const cookieStore = await headers.cookies()
      return cookieStore.get('jwt')?.value || null
    } catch (error) {
      // 如果在Pages目录中运行，返回空值
      console.warn('无法通过App Router方式获取认证Token')
      return null
    }
  } else {
    // 客户端环境 - 从浏览器cookie获取
    const value = `; ${document.cookie}`
    const parts = value.split(`; jwt=`)
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null
    }
    return null
  }
}
