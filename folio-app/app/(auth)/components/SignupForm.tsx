'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { Signup } from "../utils/Signup"

export default function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await Signup({ name: fullName, email: email, password: password });
      router.push("/");
    }
    catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Registration Failed");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card {...props}>
      <CardHeader className="text-center place-items-center">
        <CardTitle className="text-(--clr-text-light) text-[1.1rem]">
          <h1>
            Create an account
          </h1>
        </CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel
                htmlFor="name"
                className="text-(--clr-text-light)"
              >
                Full Name
              </FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                value={fullName}
                required
                className="text-(--clr-text-light) border-(--clr-border-dark)
                  py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
              />
            </Field>
            <Field>
              <FieldLabel
                htmlFor="email"
                className="text-(--clr-text-light)"
              >
                Email
              </FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                required
                className="text-(--clr-text-light) border-(--clr-border-dark)
                  py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
              />
            </Field>
            <Field>
              <FieldLabel
                htmlFor="password"
                className="text-(--clr-text-light)"
              >
                Password
              </FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                required
                className="text-(--clr-text-light) border-(--clr-border-dark)
                  py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
              />
            </Field>
            <FieldGroup>
              <Field>
                <Button
                  type="submit"
                  className="cursor-pointer bg-(--clr-purple-light) hover:bg-(--clr-purple-light-hover)"
                >
                  Sign Up
                </Button>
                <FieldDescription className="text-(--clr-text-light) px-6 text-center">
                  Already have an account?
                  <Link href="/login" className="text-(--clr-purple-light) ml-1.5">
                    Sign in
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
