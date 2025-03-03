import LayoutWithBreadcrumb from '@/app/layout-with-breadcrumb'
import { getUserMeLoader } from '@/data/services/get-user-me-loader'
import { SummaryForm } from '@/components/forms/SummaryForm'

export default async function SummariesAddRoute() {
  const user = await getUserMeLoader()
  const userData = user.data
  const userImage = userData?.image

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Summaries', href: '/dashboard/summaries' },
    { label: 'Add' },
  ]

  return (
    <LayoutWithBreadcrumb breadcrumbItems={breadcrumbItems}>
      <div className="grid w-full grid-cols-1 gap-4 p-4">
        <SummaryForm />
      </div>
    </LayoutWithBreadcrumb>
  )
}
