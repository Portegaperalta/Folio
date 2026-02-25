"use client"

import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import { Dispatch, SetStateAction } from "react"

type AddBookmarkButtonProps = {
  setIsBookmarkFormVisible: Dispatch<SetStateAction<boolean>>
}

export default function AddBookmarkButton({ setIsBookmarkFormVisible }: AddBookmarkButtonProps) {

  const displayForm = () => {
    setIsBookmarkFormVisible(true);
  }

  return (
    <Button
      title="Add bookmark"
      onClick={displayForm}
      className="text-(--clr-text-light) bg-(--clr-purple-light) 
      hover:bg-(--clr-purple-light-hover) cursor-pointer">
      <Plus />
      Add Bookmark
    </Button>
  )
}