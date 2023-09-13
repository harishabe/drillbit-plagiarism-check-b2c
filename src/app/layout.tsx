'use client'

import React, { Suspense } from 'react'
import './globals.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import Loading from './loading'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1"
      />
      <body>
        <Suspense fallback={<Loading />}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
