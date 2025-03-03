import LayoutWithBreadcrumb from '@/app/layout-with-breadcrumb'
import { SignupForm } from '@/components/forms/SignupForm'

export default function Page() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Signup' }]
  return (
    <LayoutWithBreadcrumb breadcrumbItems={breadcrumbItems}>
      <SignupForm />
    </LayoutWithBreadcrumb>
  )
}
