import { SignIn, SignOut } from "./auth-components"
import { auth } from "@/app/lib/auth"
// import Button from "@/app/ui/button"

export default async function UserButton() {
  const session = await auth()
  if (!session?.user) return <SignIn />
  return <SignOut />
}