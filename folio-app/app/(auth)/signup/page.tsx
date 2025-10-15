import SignupForm from "@/components/SignupForm";

export default function Signup() {
  return (
    <div className="flex flex-col min-h-svh -full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </div>
  )
}