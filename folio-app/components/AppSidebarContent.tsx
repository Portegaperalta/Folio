'use client'

import { useState } from "react"
import { Folder } from "lucide-react"
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
import CreateFolderButton from "./CreateFolderButton"
import CreateFolderForm from "./CreateFolderForm"

export default function AppSidebarContent() {
  const [isFolderFormVisible, setIsFolderFormVisible] = useState<boolean>(false);

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
            <SidebarMenuItem>
              <SidebarMenuButton asChild
                className="py-5 bg-(--clr-bg-lighter-dark) 
                hover:bg-(--clr-bg-lighter-dark-hover) active:bg-(--clr-bg-lighter-dark-hover)"
              >
                <Link href="/">
                  <Folder color="#F4F4F5" />
                  <span className="text-(--clr-text-light) text-[1rem]">
                    All Folders
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
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
        <CreateFolderButton setIsFolderFormVisible={setIsFolderFormVisible} />
        <CreateFolderForm
          isFolderFormVisible={isFolderFormVisible}
          setIsFolderFormVisible={setIsFolderFormVisible}
        />
      </SidebarGroup>
    </SidebarContent>
  )
}