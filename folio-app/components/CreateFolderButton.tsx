"use client"

import { Plus } from "lucide-react"
import { Button } from "./ui/button"

export default function CreateFolderButton() {
  return (
    <div className="create-new-folder-button">
      <Button
        type="button"
        size="sm"
        title="Create New Folder"
        className="text-(--clr-text-light) bg-transparent rounded-lg
        hover:bg-(--clr-purple-light) cursor-pointer"
      >
        <Plus />
      </Button>
    </div>
  )
}