const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.user.findMany({ invalidArg: true })
  } catch (e) {
    console.log('\n\n1:\n', e)
  }

  try {
    await prisma.user.findMany({ invalidArg: true })
  } catch (e) {
    console.log('\n\n2:\n', e)
  }

  try {
    await prisma.user.findMany({ invalidArg: true })
  } catch (e) {
    console.log('\n\n3:\n', e)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })