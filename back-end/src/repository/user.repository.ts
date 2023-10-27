

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function postUser(name: string,) {
    const newUser = await prisma.user.create({
        data: {
            name: name,
        }
    })

    return newUser;
}

async function fetchUser() {
    const users = await prisma.user.findMany();

    return users;
}

export default {
    postUser,
    fetchUser
}