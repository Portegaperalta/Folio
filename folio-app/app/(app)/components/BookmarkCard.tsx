import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function BookmarkCard() {
  return (
    <Link href={`#`}>
      <Card className="px-4 flex flex-row justify-between w-full max-w-100
        bg-(--clr-bg-light-dark) border-(--clr-border-dark)">
        <CardContent className="flex flex-row gap-4 items-center px-0">
          <div className="website-logo bg-(--clr-bg-lighter-dark) p-2 
          rounded-md">
            <Image
              src={`/githublogo.png`}
              width={34}
              height={10}
              alt="website logo"
            />
          </div>
          <div className="website-info">
            <div className="website-text">
              <h3 className="text-(--clr-text-light) text-[1.1rem] font-[500]">
                Github
              </h3>
              <p className="text-gray-500">
                github.com
              </p>
            </div>
          </div>
        </CardContent>
        <CardAction>
          <Button
            title="Remove bookmark"
            className="bg-(--clr-bg-dark) hover:bg-(--clr-purple-light-hover) cursor-pointer"
          >
            <Trash2 color="#F4F4F5" />
          </Button>
        </CardAction>
      </Card>
    </Link>
  )
}