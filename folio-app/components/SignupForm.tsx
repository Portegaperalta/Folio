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
import { signup } from "@/lib/auth-actions"
import Link from "next/link"

export default function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
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
        <form>
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
                placeholder="m@example.com"
                required
                className="text-(--clr-text-light) border-(--clr-border-dark)
                  py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
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
                required
                className="text-(--clr-text-light) border-(--clr-border-dark)
                  py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
              />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel
                htmlFor="confirm-password"
                className="text-(--clr-text-light)"
              >
                Confirm Password
              </FieldLabel>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="text-(--clr-text-light) border-(--clr-border-dark)
                  py-5 bg-(--clr-bg-dark) focus-visible:ring-(--clr-purple-light)"
              />
              <FieldDescription>
                Please confirm your password.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button
                  type="submit"
                  formAction={signup}
                  className="cursor-pointer bg-(--clr-purple-light) hover:bg-(--clr-purple-light-hover)"
                >
                  Create Account
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="cursor-pointer"
                >
                  Sign up with Google
                </Button>
                <FieldDescription className="text-(--clr-text-light) px-6 text-center">
                  Already have an account?
                  <Link href="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
