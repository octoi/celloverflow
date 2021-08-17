import React from 'react';
import { HeaderContainer, Button, StyledButton } from '../styles/headerStyles';

import CustomModal from './Modal';

import logoText from '../assets/logo_text.svg';
import logoIcon from '../assets/logo.svg';
import downIcon from '../assets/down_icon.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <img className='logo-text' src={logoText} alt='celloverflow' />
        <img className='logo-icon' src={logoIcon} alt='celloverflow' />
      </div>

      <CustomModal
        ui={
          <Button>
            <p>Panda Bear</p>
            <img src={downIcon} alt="more" />
          </Button>
        }
        title='Options ⚙️'
      >
        <StyledButton style={{ background: 'var(--accent-color)' }}>Profile 😊</StyledButton>
        <StyledButton style={{ background: 'var(--accent-color)' }}>Settings ‍🧰</StyledButton>
        <StyledButton style={{ background: 'var(--error-color)' }}>Logout 🚶‍♂️</StyledButton>
      </CustomModal>
    </HeaderContainer>
  )
}
