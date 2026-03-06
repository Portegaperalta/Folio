"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
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
import Image from "next/image"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/app/(auth)/utils/Login"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setMessage("");

    try {
      const response = await login({ email: email, password: password });
      setMessage(response.message || "Login Successful");
      router.push("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-(--clr-bg-ligh-dark) border-(--clr-border-dark)">
        <CardHeader className="text-center place-items-center">
          <Image
            src="/folio-logo.svg"
            alt="app logo" width={80}
            height={100}
          />
          <CardTitle className="text-(--clr-text-light) text-[1.1rem]">
            <h1>
              Sign in to Folio
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup className="space-y-2">
              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="text-(--clr-text-light) text-[1.1rem]"
                >
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-(--clr-text-light) border-(--clr-border-dark)
                  py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel
                    htmlFor="password"
                    className="text-(--clr-text-light) text-[1.1rem]"
                  >
                    Password
                  </FieldLabel>
                  <Link
                    href="/login"
                    className="text-(--clr-text-light) ml-auto inline-block
                     text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-(--clr-text-light) border-(--clr-border-dark)
                  py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
                />
              </Field>
              <Field className="space-y-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer bg-(--clr-purple-light) hover:bg-(--clr-purple-light-hover)"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
                {message ? (
                  <FieldDescription className="text-green-400 text-center">
                    {message}
                  </FieldDescription>
                ) : null}
                {error ? (
                  <FieldDescription className="text-red-400 text-center">
                    Login failed, try again later
                  </FieldDescription>
                ) : null}
                <FieldDescription className="text-(--clr-text-light) text-center
                 flex justify-center gap-1">
                  Don&apos;t have an account?
                  <Link
                    href="/signup"
                    className="hover:text-(--clr-text-light)"
                  >
                    Sign up
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
