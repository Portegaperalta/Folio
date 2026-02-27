import {
  ChevronRight,
  User,
  CircleQuestionMark,
  CircleAlert,
  Mail,
  KeyRound,
  LogOut,
} from "lucide-react";
import Link from "next/link";

export default function AccountMenu() {
  return (
    <div className="account-menu flex flex-col gap-4 w-full md:max-w-120 
    md:mx-auto lg:max-w-140">
      <h2 className="text-(--clr-text-light) text-[1.4rem] pb-6">
        Account
      </h2>
      <div className="actions">
        <ul className="actions-links flex flex-col gap-8">
          <li className="change-email-link">
            <Link
              href="/change-email"
              className="text-(--clr-text-light) text-[1.2rem] 
              flex flex-row items-center justify-between"
            >
              <div className="change-email-link-left flex gap-4">
                <Mail />
                Change Email
              </div>
              <div className="change-email-link-right">
                <ChevronRight />
              </div>
            </Link>
          </li>
          <li className="change-password-link">
            <Link
              href="/change-password"
              className="text-(--clr-text-light) text-[1.2rem] 
              flex flex-row items-center justify-between"
            >
              <div className="change-password-link-left flex gap-4">
                <KeyRound />
                Change Password
              </div>
              <div className="change-password-link-right">
                <ChevronRight />
              </div>
            </Link>
          </li>
          <li className="logout-link">
            <Link
              href="/"
              className="text-(--clr-text-light) text-[1.2rem] 
              flex flex-row items-center justify-between"
            >
              <div className="logout-link-left flex gap-4">
                <LogOut />
                Log Out
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}