import { auth } from '@/auth'
import { PrismaClient } from '@repo/db'

const prismaClientSingleton = () => {
    return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined
}

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

const getUserValue = async () => {
    try {
        const session = await auth()
        const userId = session?.user?.id
        if (!userId) throw new Error('no user')
        return (await prisma.userValue.findUnique({ where: { userId } }))
    } catch (e) {
        console.log('error', e)
        return null
    }
}

export const UserValue = async () => {
    const value = await getUserValue()
    return <span>Saved Value: {value ? value?.value : <span className='text-red-500'>no data</span>}</span>
}

