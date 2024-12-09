"use client"

import { Input } from '@repo/ui/input.tsx'
import { useState } from 'react'
import { update } from './actions'
import { Button } from '@repo/ui/button'
import { useRouter } from "next/navigation"

export const DbForm = () => {
    const router = useRouter()

    const [value, setValue] = useState('')

    return (
        <div className='flex gap-2'>
            <Input className='flex-1' onChange={(e) => { setValue(e.target.value) }} />
            <Button variant="default" onClick={() => update(value).then(() => router.refresh())}>Save</Button>
        </div>
    )
}