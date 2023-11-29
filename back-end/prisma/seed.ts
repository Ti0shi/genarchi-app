import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const ausch = await prisma.user.upsert({
    where: { name: 'Ausch' },
    update: {},
    create: {
      name: 'Ausch',
      Late: {
        create: {},
      }
    },
  })
  const arnaud = await prisma.user.upsert({
    where: { name: 'Arnaud' },
    update: {},
    create: {
      name: 'Arnaud',
      Late: {
        create: {},
      }
    },
  })
  const alexandre = await prisma.user.upsert({
    where: { name: 'Alexandre' },
    update: {},
    create: {
      name: 'Alexandre',
      Late: {
        create: {},
      }
    },
  })
  const tom = await prisma.user.upsert({
    where: { name: 'Tom' },
    update: {},
    create: {
      name: 'Tom',
      Late: {
        create: {},
      }
    },
  })
  const quentin = await prisma.user.upsert({
    where: { name: 'Quentin' },
    update: {},
    create: {
      name: 'Quentin',
      Late: {
        create: {},
      }
    },
  })
  const omar = await prisma.user.upsert({
    where: { name: 'Omar' },
    update: {},
    create: {
      name: 'Omar',
      Late: {
        create: {},
      }
    },
  })

  console.log({ ausch, arnaud, alexandre, tom, quentin, omar })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
