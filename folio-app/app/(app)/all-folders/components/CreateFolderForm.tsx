import { X } from "lucide-react"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "../../../../components/ui/input"
import { Button } from "../../../../components/ui/button"
import React, { Dispatch, SetStateAction, useState } from "react"
import { FolderCreationDTO } from "@/app/types/api"
import { CreateFolder } from "@/app/api/folder"

type CreateFolderFormProps = {
  isFolderFormVisible: boolean,
  setIsFolderFormVisible: Dispatch<SetStateAction<boolean>>,
}

export default function CreateFolderForm({
  isFolderFormVisible,
  setIsFolderFormVisible
}: CreateFolderFormProps) {

  const [folderName, setFolderName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.currentTarget.value);
  }

  const quitForm = () => {
    setIsFolderFormVisible(false);
    setFolderName("");
    setError("");
  }

  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const folderCreationDto: FolderCreationDTO = { name: folderName };
      await CreateFolder(folderCreationDto);
      setIsSubmitting(false);
      quitForm();
    }
    catch (error) {
      console.error(error);
      setError("Something went wrong, please try again");
      setIsSubmitting(false);
    }
  }

  return (
    <form
      action="#"
      id="createFolderForm"
      onSubmit={handleFormSubmit}
      className={`px-6 py-4 bg-(--clr-bg-light-dark) rounded-lg
      border border-(--clr-border-dark) w-full max-w-90 md:max-w-110 absolute
      left-1/2 -translate-x-1/2 translate-y-1/5 ${isFolderFormVisible ? `inline-block` : `hidden`}
      z-100`}
    >
      <FieldSet>
        <div className="form-top flex items-center justify-between">
          <div className="form-top-text">
            <h3 className="text-(--clr-text-light) text-[1.2rem] font-medium">
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
          {error ? (
            <FieldDescription className="text-red-400 text-center">
              {error}
            </FieldDescription>
          ) : null}
          <Field>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="text-(--clr-text-light) bg-(--clr-purple-light) 
              rounded-lg hover:bg-(--clr-purple-light-hover) cursor-pointer"
            >
              {isSubmitting ? "Creating Folder..." : "Create Folder"}
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}