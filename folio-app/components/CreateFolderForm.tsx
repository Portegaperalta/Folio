import { X } from "lucide-react"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import React, { Dispatch, SetStateAction, useState } from "react"

type CreateFolderFormProps = {
  isFolderFormVisible: boolean,
  setIsFolderFormVisible: Dispatch<SetStateAction<boolean>>,
}

export default function CreateFolderForm({
  isFolderFormVisible,
  setIsFolderFormVisible
}: CreateFolderFormProps) {

  const [folderName, setFolderName] = useState<string>("");

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.currentTarget.value);
  }

  const quitForm = () => {
    setIsFolderFormVisible(false);
    setFolderName("");
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    quitForm();
  }

  return (
    <form
      action="#"
      id="createFolderForm"
      onSubmit={handleFormSubmit}
      className={`px-6 py-4 bg-(--clr-bg-light-dark) rounded-lg
      border-1 border-(--clr-border-dark) w-full max-w-120 absolute
      left-1/2 -translate-x-1/2 translate-y-1/5 ${isFolderFormVisible ? `inline-block` : `hidden`}`}
    >
      <FieldSet>
        <div className="form-top flex items-center justify-between">
          <div className="form-top-text">
            <h3 className="text-(--clr-text-light) text-[1.2rem] font-[500]">
              Create New Folder
            </h3>
          </div>
          <Button
            type="button"
            onClick={quitForm}
            className="quit-form-button text-(--clr-gray-text) bg-transparent 
            hover:text-(--clr-text-light) hover:bg-transparent cursor-pointer">
            <X />
          </Button>
        </div>
        <FieldGroup>
          <Field>
            <FieldLabel
              htmlFor="folderName"
              className="text-(--clr-text-light)"
            >
              Folder Name
            </FieldLabel>
            <Input
              type="text"
              id="folderName"
              value={folderName}
              placeholder="Work, Personal, etc."
              required
              onChange={handleNameInput}
              autoComplete="off"
              className="text-(--clr-text-light) border-(--clr-border-dark)
              rounded-lg py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
            />
          </Field>
          <Field>
            <Button
              type="submit"
              className="text-(--clr-text-light) bg-(--clr-purple-light) 
              rounded-lg hover:bg-(--clr-purple-light-hover) cursor-pointer"
            >
              Create Folder
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}