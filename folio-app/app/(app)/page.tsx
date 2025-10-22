"use client"

import AddBookmarkButton from "@/components/AddBookmarkButton";
import NewBookmarkForm from "@/components/NewBookmarkForm";
import { useState } from "react";

export default function Home() {
  const [isBookmarkFormVisible, setIsBookmarkFormVisible] = useState<boolean>(false)

  return (
    <div className="home pt-4 relative">
      <div className="home-content flex flex-col gap-30">
        <div className="home-top flex flex-row items-center justify-between">
          <div className="home-title">
            <h2 className="text-(--clr-text-light) text-[2rem] font-[500]">
              All Bookmarks
            </h2>
            <p className="text-(--clr-gray-text)">
              0 Bookmarks
            </p>
          </div>
          <AddBookmarkButton />
        </div>
        <NewBookmarkForm isBookmarkFormVisible />
      </div>
    </div>
  );
}
