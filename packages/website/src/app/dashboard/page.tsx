import LayoutWithBreadcrumb from '@/app/dashboard/layout-with-breadcrumb'

export default async function AccountRoute() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Dashboard' }]

  return (
    <LayoutWithBreadcrumb breadcrumbItems={breadcrumbItems}>
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-5">Dashboard</div>
    </LayoutWithBreadcrumb>
  )
}
