import { House, Folder, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const items = [
  {
    title: "Home",
    url: "/",
    icon: <House color="#F4F4F5" />,
  },
  {
    title: "My Folders",
    url: "/bookmarks",
    icon: <Folder color="#F4F4F5" />,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: <Settings color="#F4F4F5" />,
  }
]

export default function AppSidebar() {
  return (
    <Sidebar className="border-r-(--clr-border-dark)">
      <SidebarContent className="bg-(--clr-bg-ligh-dark)">
        <SidebarGroup className="space-y-6 px-0">
          <SidebarGroupLabel className="text-(--clr-purple-light) text-[1.6rem]
          py-6 px-4 border-b-1 rounded-none border-(--clr-border-dark)">
            <Link href="/">
              Folio
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-4">
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild
                    className="py-6 hover:bg-(--clr-purple-light) active:bg-(--clr-purple-light)"
                  >
                    <Link href={item.url}>
                      {item.icon}
                      <span className="text-(--clr-text-light)">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}