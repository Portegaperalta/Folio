import { Folder } from "lucide-react"
import folders from "@/app/data/folders"
import Link from "next/link"

export default function FoldersList() {
  return (
    <ul className="folders-list space-y-4">
      {
        folders.map((folder) => (
          <Link
            href={folder.url}
            key={folder.id}
            className="py-2 px-2 flex flex-row justify-between rounded-md 
            hover:bg-(--clr-purple-light)"
          >
            <div className="text-(--clr-text-light) flex gap-2">
              <Folder color="#FFFFFF" size={20} />
              <p>{folder.name}</p>
            </div>
            <div className="text-(--clr-gray-text)">
              <p>{folder.bookmarkCount}</p>
            </div>
          </Link>
        ))
      }
    </ul>
  )
}