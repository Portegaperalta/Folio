import { Home, Folder, Settings, UserRound, icons } from 'lucide-react'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'

const items = [
    {
        title: 'Home',
        url: '/',
        icon: <Home />
    },
    {
        title: 'Saved Websites',
        url: '/',
        icon: <Folder />
    },
    {
        title: 'My Account',
        url: '/',
        icon: <UserRound />
    },
    {
        title: 'Settings',
        url: '/',
        icon: <Settings />
    }
]

export default function AppSidebar() {
    return (
        <Sidebar className='bg-(--clr-background)'>
            <SidebarContent className='bg-(--clr-background) px-2 py-8'>
                <SidebarGroup />
                <SidebarGroupContent>
                    <SidebarMenu className='space-y-4'>
                        {
                            items.map((item) => (
                                <SidebarMenuItem
                                    key={item.title}
                                    className='text-white'
                                >
                                    <SidebarMenuButton asChild
                                        className='py-6 rounded-md'
                                    >
                                        <Link
                                            href={item.url}
                                            className='text-[1.2rem]'
                                        >
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
            </SidebarContent>
        </Sidebar>
    )
}