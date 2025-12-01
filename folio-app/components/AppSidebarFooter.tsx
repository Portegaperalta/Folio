import { ChevronUp, User2 } from "lucide-react"
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "./ui/sidebar"
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
import Link from "next/link"

export default function AppSidebarFooter() {
  return (
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
                <p>Username</p>
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
  )
}