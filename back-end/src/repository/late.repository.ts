

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function fetchLate() {
    const lates = await prisma.late.findMany({
        include: {
            user: true
        }
    })

    return lates;
}

async function postLate(startedAt: Date, userId: string) {
    console.log(startedAt, userId)
    const newLate = await prisma.late.create({
        data: {
            meetingstartedAt: new Date(startedAt).toISOString(),
            userId: userId
        }
    })

    return newLate;
}

export default {
    fetchLate,
    postLate
}
