import { signIn, signOut } from "@/app/lib/auth"
// import { Button } from "../ui/button"

// }: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
export function SignIn({
  provider,
  ...props
}: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <button {...props}>Sign In</button>
    </form>
  )
}
// props: React.ComponentPropsWithRef<typeof Button>
export function SignOut(props: any) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button {...props}>
        Sign Out
      </button>
    </form>
  )
}