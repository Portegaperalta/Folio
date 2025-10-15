import { cn } from "@/lib/utils"
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
import { login } from "@/lib/auth-actions"
import Link from "next/link"
import LoginWithGoogleButton from "./LoginWithGoogleButton"
import Image from "next/image"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-(--clr-bg-ligh-dark) border-(--clr-border-dark)">
        <CardHeader className="text-center place-items-center">
          <Image src="/folio-logo.png" alt="app logo" width={80} height={100} />
          <CardTitle className="text-(--clr-text-light) text-[1.1rem]">
            <h1>
              Sign in to your account
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
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
                  required
                  className="text-(--clr-text-light) border-(--clr-border-dark)
                  py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
                />
              </Field>
              <Field>
                <Button
                  type="submit"
                  formAction={login}
                  className="cursor-pointer bg-(--clr-purple-light) hover:bg-(--clr-purple-light-hover)"
                >
                  Login
                </Button>
                <LoginWithGoogleButton />
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
