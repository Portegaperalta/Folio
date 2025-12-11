import Link from "next/link";
import { Card, CardContent, } from "@/components/ui/card"
import { Folder } from "lucide-react";

type FolderCardProps = {
  folderName: string,
  slug: string,
}

export default function FolderCard({ folderName, slug }: FolderCardProps) {
  return (
    <Link href={`/all-folders/${slug}`}>
      <Card className="w-full max-w-36 bg-transparent border-(--clr-border-dark)">
        <CardContent className="space-y-2">
          <div className="card-logo flex justify-center">
            <Folder color="#FFFFFF" size={36} />
          </div>
          <div className="card-title text-center">
            <h3 className="text-(--clr-text-light) text-[1.1rem]">
              {folderName}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}