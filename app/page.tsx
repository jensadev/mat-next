import { auth } from '@/app/lib/auth'
import { prisma } from '@/app/lib/prisma'

export default async function Home() {
  const session = await auth()

  if (session) {

    let user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email as string
      }
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: session?.user?.email as string,
        }
      })
    }
  }

  return (
    <main className={styles.main}>
      <h1>Welcome {session?.user?.name}</h1>
    </main>
  )
}
