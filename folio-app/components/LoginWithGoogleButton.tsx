"use client"

import { signInWithGoogle } from "@/lib/auth-actions"
import { Button } from "./ui/button"

export default function LoginWithGoogleButton() {
  return (
    <Button
      variant="outline"
      type="button"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      Login with Google
    </Button>
  )
}