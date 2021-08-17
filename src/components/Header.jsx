import React from 'react';
import { HeaderContainer } from '../styles/headerStyles';

import LogoText from '../assets/logo_text.svg';
import LogoIcon from '../assets/logo.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <img className='logo-text' src={LogoText} alt='celloverflow' />
        <img className='logo-icon' src={LogoIcon} alt='celloverflow' />
      </div>
    </HeaderContainer>
  )
}
