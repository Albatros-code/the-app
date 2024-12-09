'use server'
import { auth } from '@/auth'
import { prisma } from './dbUtils'

export async function update(value: string) {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) throw new Error('no id')
    const data = await prisma.userValue.upsert({ where: { userId }, create: { userId, value: value }, update: { value: value } })
    return data
}
