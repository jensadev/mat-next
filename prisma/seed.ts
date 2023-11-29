import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.findFirst()

  if (!user) {
    throw new Error("No user found!")
  }

  const dish = await prisma.dish.create({
    data: {
      name: "test",
    },
  })

  const meal = await prisma.meal.create({
    data: {
      date: new Date(),
      userId: user.id,
      dishId: dish.id,
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
