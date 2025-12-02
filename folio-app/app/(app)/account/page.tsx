import { ArrowLeft } from "lucide-react";
import { User } from "lucide-react";
import Link from "next/link";
import AccountMenu from "./components/AccountMenu";

export default function Account() {
  return (
    <div className="pt-4">
      <div className="account-content flex flex-col gap-8">
        <div className="account-content-top space-y-10">
          <Link
            href="/"
            className="p-2 text-(--clr-text-light) flex flex-row
            gap-2 rounded-md hover:bg-(--clr-purple-light)"
          >
            <ArrowLeft />
            Back to Home
          </Link>
          <div className="account-user-avatar flex flex-col gap-4 items-center">
            <div className="p-4 rounded-full bg-(--clr-purple-dark-bg)">
              <User color="#9868E5" size={50} />
            </div>
            <div className="text-(--clr-text-light) text-[1.4rem] font-[500]">
              <p>John Doe</p>
            </div>
          </div>
        </div>
        <AccountMenu />
      </div>
    </div>
  )
}