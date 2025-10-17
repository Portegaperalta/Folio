import { Folder, ChevronUp, User2, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarGroupAction,
} from "@/components/ui/sidebar"
import Link from "next/link"

export default function AppSidebar() {
  return (
    <Sidebar className="border-r-(--clr-border-dark)">
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
                    <span className="text-(--clr-text-light) text-[1.1rem] lg:text-[1rem]">
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
      <SidebarFooter className="bg-(--clr-bg-light-dark)">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu >
              <DropdownMenuTrigger
                asChild
                className="cursor-pointer "
              >
                <SidebarMenuButton className="text-(--clr-text-light) 
                hover:text-(--clr-text-light) hover:bg-(--clr-bg-light-dark)">
                  <User2 />
                  <p>Pablo E.</p>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width] 
                bg-(--clr-bg-light-dark) border-(--clr-border-dark)"
              >
                <DropdownMenuItem className="text-(--clr-text-light) 
                cursor-pointer hover:bg-(--clr-purple-light)">
                  <Link href="/account">
                    Account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-(--clr-text-light)
                 cursor-pointer hover:bg-(--clr-purple-light)">
                  <Link href="/logout">
                    Log out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}