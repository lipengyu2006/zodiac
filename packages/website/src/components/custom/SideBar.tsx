import { AppSidebar } from '@/components/app-sidebar'
import { getUserMeLoader } from '@/data/services/get-user-me-loader'

export async function Sidebar() {
  const user = await getUserMeLoader()
  const userDataDefault = { username: '', email: '', avatar: '' }
  return (
    <AppSidebar
      isLogin={user.ok}
      user={user.ok ? user.data : userDataDefault}
    />
  )
}
