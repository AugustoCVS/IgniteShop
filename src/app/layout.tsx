'use client'

import { ReactNode } from 'react'

import StyledComponentsRegistry from './lib/registry'
import Header from '@/Components/Header/Header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
