"use client"

import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import { Dispatch, SetStateAction } from "react"

type CreateFolderButtonProps = {
  setIsFolderFormVisible: Dispatch<SetStateAction<boolean>>
}

export default function CreateFolderButton({
  setIsFolderFormVisible
}: CreateFolderButtonProps) {

  const displayFolderForm = () => {
    setIsFolderFormVisible(true);
  }

  return (
    <div className="create-new-folder-button">
      <Button
        type="button"
        size="sm"
        title="Create New Folder"
        onClick={displayFolderForm}
        className="text-(--clr-text-light) bg-transparent rounded-lg
        hover:bg-(--clr-purple-light) cursor-pointer"
      >
        <Plus />
      </Button>
    </div>
  )
}