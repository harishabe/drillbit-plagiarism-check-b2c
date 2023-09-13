import React, { Suspense } from 'react'

import { Navbar } from '@/app/components'
import Loading from './loading'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      {children}
    </Suspense>
  )
}
