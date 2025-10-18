import { Plus } from "lucide-react"
import { Button } from "./ui/button"

export default function AddBookmarkButton() {
  return (
    <Button
      title="Add bookmark"
      className="text-(--clr-text-light) bg-(--clr-purple-light) 
      hover:bg-(--clr-purple-light-hover) cursor-pointer">
      <Plus />
      Add Bookmark
    </Button>
  )
}