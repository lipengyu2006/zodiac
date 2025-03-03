import { ReactNode } from 'react'

export type BreadcrumbItemType = {
  label: string
  href?: string
  isCurrent?: boolean
}

export function BreadcrumbWrapper({
  breadcrumbItems,
  children,
}: {
  breadcrumbItems?: BreadcrumbItemType[]
  children: ReactNode
}) {
  return <>{children}</>
}

export default BreadcrumbWrapper
