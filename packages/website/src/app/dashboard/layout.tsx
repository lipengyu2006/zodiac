import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Sidebar } from '@/components/custom/SideBar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
