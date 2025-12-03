'use client'

import { Folder, House } from "lucide-react"
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import FoldersList from "./FoldersList"

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: <House color="#F4F4F5" />,
  },
  {
    name: "All Folders",
    href: "/all-folders",
    icon: <Folder color="#F4F4F5" />,
  },
]

export default function AppSidebarContent() {
  return (
    <SidebarContent className="bg-(--clr-bg-light-dark)">
      <SidebarGroup className="space-y-6 px-0">
        <SidebarGroupLabel className="text-(--clr-purple-light) text-[1.6rem]
          py-6 px-4 border-b-1 rounded-none border-(--clr-border-dark)">
          <Link href="/">
            Folio
          </Link>
        </SidebarGroupLabel>
        <SidebarGroupContent className="px-4">
          <SidebarMenu className="space-y-2">
            {
              sidebarItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild
                    className="py-5 bg-(--clr-bg-lighter-dark) 
                hover:bg-(--clr-bg-lighter-dark-hover) active:bg-(--clr-bg-lighter-dark-hover)"
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span className="text-(--clr-text-light) text-[1rem]">
                        {item.name}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))
            }
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup className="flex flex-row justify-between space-y-6">
        <SidebarGroupLabel className="text-(--clr-text-light) 
          text-[1rem] px-4">
          <p>
            Folders
          </p>
        </SidebarGroupLabel>
      </SidebarGroup>
      <SidebarGroup className="px-4">
        <FoldersList />
      </SidebarGroup>
    </SidebarContent>
  )
}