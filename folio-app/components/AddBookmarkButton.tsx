import { Plus } from "lucide-react"
import { Button } from "./ui/button"

export default function AddBookmarkButton() {
  return (
    <Button
      title="Add bookmark"
      className="text-(--clr-text-light) bg-(--clr-purple-light) 
    cursor-pointer hover:bg-(--clr-purple-light)">
      <Plus />
      Add Bookmark
    </Button>
  )
}