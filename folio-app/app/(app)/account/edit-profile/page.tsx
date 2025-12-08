import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import EditProfileForm from "./components/EditProfileForm"

export default function EditProfile() {
  return (
    <div className="pt-4">
      <div className="edit-profile-content">
        <div className="edit-profile-top">
          <Link
            href="/account"
            className="p-2 text-(--clr-text-light) flex flex-row
            gap-2 rounded-md"
          >
            <ArrowLeft />
            Back to Account
          </Link>
        </div>
        <EditProfileForm />
      </div>
    </div>
  )
}