import { Camera } from "lucide-react"

export default function EditProfileForm() {
  return (
    <form className="edit-profile-form pt-4">
      <div className="profile-images relative">
        <div className="profile-banner pt-26 pb-4 px-4 bg-(--clr-gray) flex flex-row justify-end">
          <div
            title="Change Banner"
            className="change-banner-button">
            <Camera size={26} />
          </div>
        </div>
        <div className="profile-avatar absolute -bottom-14 left-2 py-11 flex flex-col items-center w-full max-w-30 rounded-full
        bg-[url(/images/profile-avatar.png)] bg-cover bg-no-repeat bg-center">
          <div
            title="Change Avatar"
            className="change-avatar-button"
          >
            <Camera size={26} />
          </div>
        </div>
      </div>
      <div className="profile-info">

      </div>
    </form>
  )
}