"use client"

import Link from "next/link";
import { Home, Folder, UserRound } from "lucide-react";
import React, { useState } from "react";

const navItems = [
  {
    name: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    name: "Folders",
    icon: <Folder />,
    href: "/all-folders",
  },
  {
    name: "Account",
    icon: <UserRound />,
    href: "/account",
  }
]

export default function MobileNavbar() {
  const [isActive, setIsActive] = useState<string>("");

  return (
    <div className="mobile-navbar py-4 w-full bg-(--clr-bg-light-dark)
     fixed bottom-0 z-50 border-t-1 border-(--clr-border-dark) md:hidden">
      <nav>
        <ul className="flex flex-row justify-around">
          {
            navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setIsActive(item.name)}
              >
                <Link
                  href={item.href}
                  className={`${isActive === item.name ? `text-(--clr-purple-light)` : `text-(--clr-gray-text)`} flex flex-col items-center gap-1`}
                >
                  {item.icon}
                  <p className="">
                    {item.name}
                  </p>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}