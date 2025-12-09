import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import EditProfileForm from "./components/EditProfileForm"
import SaveChangesButton from "./components/SaveChangesButton"

export default function EditProfile() {
  return (
    <div className="pt-4">
      <div className="edit-profile-content">
        <div className="edit-profile-top flex flex-row items-center justify-between">
          <Link
            href="/account"
            className="p-2 text-(--clr-text-light) flex flex-row
            gap-2 rounded-md"
          >
            <ArrowLeft />
            Back to Account
          </Link>
          <SaveChangesButton />
        </div>
        <EditProfileForm />
      </div>
    </div>
  )
}