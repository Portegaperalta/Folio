import { Sidebar } from "@/components/ui/sidebar"
import AppSidebarFooter from "./AppSidebarFooter"
import AppSidebarContent from "./AppSidebarContent"

export default function AppSidebar() {
  return (
    <Sidebar className="border-r-(--clr-border-dark)">
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  )
}