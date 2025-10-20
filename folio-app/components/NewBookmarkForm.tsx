"use client"

import { Type, X } from "lucide-react"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import React, { useState } from "react"

type NewBookmarkFormProps = {
  isAddBookmarkButtonClicked: boolean
}

export default function NewBookmarkForm({ isAddBookmarkButtonClicked }: NewBookmarkFormProps) {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const handleQuitFormButton = () => {
    setIsFormVisible(false);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form
      action="#"
      id="newBookmarkForm"
      onSubmit={handleFormSubmit}
      className={`px-6 py-4 bg-(--clr-bg-light-dark) w-full max-w-120
      rounded-lg border-1 border-(--clr-border-dark) absolute top-1/2
      left-1/2 -translate-x-1/2 translate-y-1/4 ${isFormVisible ? `inline-block` : `hidden`}`}
    >
      <FieldSet>
        <div className="form-top text-(--clr-text-light) flex items-center 
        justify-between">
          <h3 className="text-[1.2rem]">Add New Bookmark</h3>
          <Button
            type="button"
            onClick={handleQuitFormButton}
            className="quit-form-button text-(--clr-gray-text) bg-transparent 
            hover:text-(--clr-text-light) hover:bg-transparent cursor-pointer">
            <X />
          </Button>
        </div>
        <FieldGroup>
          <Field>
            <FieldLabel
              htmlFor="title"
              className="text-(--clr-text-light) text-[1rem]"
            >
              Title
            </FieldLabel>
            <Input
              id="title"
              type="text"
              placeholder="My Favorite Website"
              required
              className="text-(--clr-text-light) border-(--clr-border-dark)
              py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
            />
          </Field>
          <Field>
            <FieldLabel
              htmlFor="url"
              className="text-(--clr-text-light) text-[1rem]"
            >
              URL
            </FieldLabel>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              required
              className="text-(--clr-text-light) border-(--clr-border-dark)
              py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
            />
          </Field>
          <Field>
            <FieldLabel
              className="text-(--clr-text-light) text-[1rem]">
              Folder (Optional)
            </FieldLabel>
            <Select>
              <SelectTrigger className="text-(--clr-text-light) 
              border-(--clr-border-dark) py-5 bg-(--clr-bg-dark) 
              focus-visible:ring-(--clr-purple-light) cursor-pointer">
                <SelectValue placeholder="Select a folder" />
              </SelectTrigger>
              <SelectContent className="bg-(--clr-bg-light-dark) 
              border-(--clr-border-dark)">
                <SelectItem
                  value="No folder"
                  className="text-(--clr-text-light) bg-(--clr-bg-light-dark)
                  hover:bg-(--clr-purple-light)"
                >
                  No Folder
                </SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <Button
              type="submit"
              className="text-(--clr-text-light) bg-(--clr-purple-light) 
          hover:bg-(--clr-purple-light-hover) cursor-pointer"
            >
              Add Bookmark
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}