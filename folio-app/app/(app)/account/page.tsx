import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Account() {
  return (
    <div className="pt-4">
      <div className="content">
        <div className="content-top">
          <div className="">
            <Link href="/">
              <ArrowLeft />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}