import LayoutWithBreadcrumb from '@/app/layout-with-breadcrumb'
import { getUserMeLoader } from '@/data/services/get-user-me-loader'
import { ProfileForm } from '@/components/forms/ProfileForm'
import { ProfileImageForm } from '@/components/forms/ProfileImageForm'

export default async function AccountRoute() {
  const user = await getUserMeLoader()
  const userData = user.data
  const userImage = userData?.image

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Account' },
  ]

  return (
    <LayoutWithBreadcrumb breadcrumbItems={breadcrumbItems}>
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-5">
        <ProfileForm data={userData} className="col-span-3" />
        <ProfileImageForm data={userImage} className="col-span-2" />
      </div>
    </LayoutWithBreadcrumb>
  )
}
