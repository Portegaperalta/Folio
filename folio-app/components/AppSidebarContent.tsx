import { Folder, Plus } from "lucide-react"
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupAction,
} from "@/components/ui/sidebar"
import Link from "next/link"

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
            <SidebarMenuItem>
              <SidebarMenuButton asChild
                className="py-6 hover:bg-(--clr-purple-light) 
                    active:bg-(--clr-purple-light)"
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
      <SidebarGroup className="space-y-6 px-0">
        <SidebarGroupLabel className="text-(--clr-text-light) 
          text-[1rem] px-4">
          <p>
            Folders
          </p>
        </SidebarGroupLabel>
        <SidebarGroupAction
          title="Add Folder"
          className="hover:bg-(--clr-purple-light) cursor-pointer"
        >
          <Plus color="#F4F4F5" />
        </SidebarGroupAction>
      </SidebarGroup>
    </SidebarContent>
  )
}