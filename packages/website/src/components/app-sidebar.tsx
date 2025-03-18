'use client'

import * as React from 'react'
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LogIn,
  Map,
  PieChart,
  UserPlus,
  Settings2,
  SquareTerminal,
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavProjects } from '@/components/nav-projects'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import { getBasePath } from '@/lib/utils'

const basePath = getBasePath()
const data = {
  navMain: [
    {
      title: 'Summaries',
      url: `${basePath}/dashboard/summaries`,
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'List',
          url: `${basePath}/dashboard/summaries`,
        },
        {
          title: 'Add',
          url: `${basePath}/dashboard/summaries`,
          isActive: true,
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: '登录',
      url: '#',
      icon: LogIn,
    },
    {
      title: '注册',
      url: '#',
      icon: UserPlus,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
}

export function AppSidebar({
  isLogin,
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  isLogin: boolean
  readonly user: {
    username: string
    email: string
    avatar: string
  }
}) {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        {isLogin && <NavMain items={data.navMain} />}
        {!isLogin && <NavSecondary items={data.navSecondary} />}
      </SidebarContent>
      {isLogin && (
        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
      )}
    </Sidebar>
  )
}
