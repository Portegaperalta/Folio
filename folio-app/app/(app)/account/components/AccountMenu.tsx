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
    <div className="account-menu flex flex-col gap-10 w-full md:max-w-120 
    md:mx-auto lg:max-w-140">
      <div className="account">
        <h2 className="text-(--clr-text-light) text-[1.4rem] pb-6">
          Account
        </h2>
        <ul className="account-links">
          <li className="edit-profile-link">
            <Link
              href="/account/edit-profile"
              className="text-(--clr-text-light) text-[1.2rem] flex flex-row 
              items-center justify-between"
            >
              <div className="edit-profile-link-left flex gap-4">
                <User />
                Edit Profile
              </div>
              <div className="edit-profile-link-right">
                <ChevronRight />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="support">
        <h2 className="text-(--clr-text-light) text-[1.4rem] pb-6">
          Support
        </h2>
        <ul className="support-links flex flex-col gap-8">
          <li className="help-link">
            <Link
              href="/help"
              className="text-(--clr-text-light) text-[1.2rem] flex flex-row 
              items-center justify-between"
            >
              <div className="help-link-left flex gap-4">
                <CircleQuestionMark />
                Help & Support
              </div>
              <div className="help-link-right">
                <ChevronRight />
              </div>
            </Link>
          </li>
          <li className="terms-link">
            <Link
              href="/terms"
              className="text-(--clr-text-light) text-[1.2rem] 
              flex flex-row items-center justify-between"
            >
              <div className="terms-link-left flex gap-4">
                <CircleAlert />
                Terms and Policies
              </div>
              <div className="terms-link-right">
                <ChevronRight />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="actions">
        <h2 className="text-(--clr-text-light) text-[1.4rem] pb-6">
          Actions
        </h2>
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