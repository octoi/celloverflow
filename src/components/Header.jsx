import React from 'react';
import { HeaderContainer } from '../styles/headerStyles';
import LogoText from '../assets/logo_text.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={LogoText} alt="" />
    </HeaderContainer>
  )
}
