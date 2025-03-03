import LayoutWithBreadcrumb from '@/app/layout-with-breadcrumb'

export default function Page() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }]

  return (
    <LayoutWithBreadcrumb breadcrumbItems={breadcrumbItems}>
      <div className="mx-auto w-full max-w-md">
        <h1>Dashboard</h1>
      </div>
    </LayoutWithBreadcrumb>
  )
}
