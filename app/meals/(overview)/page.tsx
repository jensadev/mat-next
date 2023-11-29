import { auth } from '@/app/lib/auth'
import { prisma } from '@/app/lib/prisma'

export default async function Page() {
  const session = await auth()

  let user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string
    }
  })

  const meals = await prisma.meal.findMany({
    where: {
      userId: user?.id
    }, include: {
      dish: true
    }
  })

  return (
    <main>
      <h1>Meals page</h1>
      <ul>
        {meals.map(meal => (
          <li key={meal.id}>{meal.dish.name}</li>
        ))}
      </ul>
    </main >
  )
}