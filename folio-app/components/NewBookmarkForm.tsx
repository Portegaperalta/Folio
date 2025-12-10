"use client"

import { X } from "lucide-react"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"

type NewBookmarkFormProps = {
  isBookmarkFormVisible: boolean,
  setIsBookmarkFormVisible: Dispatch<SetStateAction<boolean>>,
}

export default function NewBookmarkForm(
  { isBookmarkFormVisible,
    setIsBookmarkFormVisible
  }: NewBookmarkFormProps) {

  const [bookmarkTitle, setBookmarkTitle] = useState<string>("");
  const [bookmarkURL, setBookmarkURL] = useState<string>("");

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookmarkTitle(e.target.value);
  }

  const handleURLInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookmarkURL(e.target.value);
  }

  const quitForm = () => {
    setBookmarkTitle("");
    setBookmarkURL("");
    setIsBookmarkFormVisible(false);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    quitForm();
  }

  return (
    <form
      action="#"
      id="newBookmarkForm"
      onSubmit={handleFormSubmit}
      className={`px-6 py-4 bg-(--clr-bg-light-dark) w-full max-w-120
      rounded-lg border-1 border-(--clr-border-dark) absolute top-1/2
      left-1/2 -translate-x-1/2 translate-y-1/4 ${isBookmarkFormVisible ? `inline-block` : `hidden`}
      z-100`}
    >
      <FieldSet>
        <div className="form-top text-(--clr-text-light) flex items-center 
        justify-between">
          <h3 className="text-[1.2rem]">Add New Bookmark</h3>
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
              htmlFor="title"
              className="text-(--clr-text-light) text-[1rem]"
            >
              Title
            </FieldLabel>
            <Input
              id="title"
              type="text"
              value={bookmarkTitle}
              placeholder="My Favorite Website"
              required
              onChange={handleTitleInput}
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
              value={bookmarkURL}
              placeholder="https://example.com"
              required
              onChange={handleURLInput}
              className="text-(--clr-text-light) border-(--clr-border-dark)
              py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
            />
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