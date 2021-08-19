import React from 'react';
import { HeaderContainer, Button, StyledButton } from '../styles/headerStyles';

import CustomModal from './Modal';

import logoText from '../assets/logo_text.svg';
import logoIcon from '../assets/logo.svg';
import downIcon from '../assets/down_icon.svg';

import { useDispatch } from 'react-redux';
import { logout as userLogout } from '../redux/actions/userLogin';

export default function Header() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
    window.location.reload();
  }

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
        <StyledButton onClick={logout} style={{ background: 'var(--error-color)' }}>Logout 🚶‍♂️</StyledButton>
      </CustomModal>
    </HeaderContainer>
  )
}
