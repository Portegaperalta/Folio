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
    title: "All Folders",
    url: "/",
    icon: <House color="#F4F4F5" />,
  },
  {
    title: "My Bookmarks",
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
    <Sidebar>
      <SidebarContent className="bg-(--clr-bg-ligh-dark)">
        <SidebarGroup className="space-y-10">
          <SidebarGroupLabel className="text-(--clr-text-light) text-[1.6rem]">
            <Link href="/">
              Folio
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
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