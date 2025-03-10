import LayoutWithBreadcrumb from '@/app/layout-with-breadcrumb'
import { SigninForm } from '@/components/forms/SigninForm'

export default function Page() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Signin' }]

  return (
    <LayoutWithBreadcrumb breadcrumbItems={breadcrumbItems}>
      <SigninForm />
    </LayoutWithBreadcrumb>
  )
}
