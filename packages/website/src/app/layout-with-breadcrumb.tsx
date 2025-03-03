import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Fragment } from 'react'

// app/layout-with-breadcrumb.tsx
export default function LayoutWithBreadcrumb({
  children,
  breadcrumbItems,
}: {
  children: React.ReactNode
  breadcrumbItems: Array<{ label: string; href?: string }>
}) {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbItems ? (
                breadcrumbItems.map((item, index) => (
                  <Fragment key={`${index}-fregment`}>
                    <BreadcrumbItem
                      className={
                        breadcrumbItems.length - 1 ? 'hidden md:block' : ''
                      }
                    >
                      {item.href ? (
                        <BreadcrumbLink href={item.href}>
                          {item.label}
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbItems.length - 1 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                  </Fragment>
                ))
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbPage>Home</BreadcrumbPage>
                </BreadcrumbItem>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1">{children}</div>
    </>
  )
}
