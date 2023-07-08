import React from 'react'

import logoIgnite from '../../assets/logoIgnite.svg'
import { HeaderContainer } from './styles'
import Image from 'next/image'

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Image src={logoIgnite} alt="logo da ignite shop" />
      </HeaderContainer>
    </>
  )
}
