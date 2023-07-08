'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../styles/themes/defaultTheme'
import { GlobalSyle } from '../styles/global'
import Home from '@/Components/Home/Home'

export default function Page() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSyle />
      <Home />
    </ThemeProvider>
  )
}
