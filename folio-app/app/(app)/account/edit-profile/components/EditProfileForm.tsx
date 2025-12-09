"use client"

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Camera } from "lucide-react"
import React, { useState } from "react"

export default function EditProfileForm() {
  const [newDisplayName, setNewDisplayName] = useState<string>("");
  const [newBio, setNewBio] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDisplayName(e.target.value);
  }

  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBio(e.target.value);
  }

  return (
    <form className="edit-profile-form pt-4 flex flex-col gap-20">
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
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel
                htmlFor="displayName"
                className="text-(--clr-text-light) text-[1.2rem] font-normal"
              >
                Display Name
              </FieldLabel>
              <Input
                id="displayName"
                type="text"
                required
                onChange={handleNameChange}
                value={newDisplayName}
                maxLength={50}
                autoComplete="off"
                className="text-(--clr-text-light) border-t-0 border-l-0
                 border-r-0 rounded-none focus-visible:ring-0"
              />
              <div className="input-word-counter flex flex-row justify-end">
                <p className="text-(--clr-text-light)">
                  {`${newDisplayName.length}/50`}
                </p>
              </div>
            </Field>
            <Field>
              <FieldLabel
                htmlFor="bio"
                className="text-(--clr-text-light) text-[1.2rem] font-normal"
              >
                Bio
              </FieldLabel>
              <Input
                id="bio"
                type="text"
                maxLength={500}
                onChange={handleBioChange}
                value={newBio}
                autoComplete="off"
                className="text-(--clr-text-light) border-t-0 border-l-0
                 border-r-0 rounded-none focus-visible:ring-0"
              />
              <div className="input-word-counter flex flex-row justify-end">
                <p className="text-(--clr-text-light)">
                  {`${newBio.length}/500`}
                </p>
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </form>
  )
}