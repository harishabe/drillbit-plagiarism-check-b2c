'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LoadingIndicator } from '@/app/components'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  })

  return <LoadingIndicator />
}
