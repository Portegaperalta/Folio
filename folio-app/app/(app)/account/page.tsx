import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Account() {
  return (
    <div className="pt-4">
      <div className="content">
        <div className="content-top">
          <Link
            href="/"
            className="p-2 text-(--clr-text-light) flex flex-row
            gap-2 rounded-md hover:bg-(--clr-purple-light)"
          >
            <ArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}