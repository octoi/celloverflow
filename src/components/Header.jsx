import React from 'react';
import { HeaderContainer, Button, StyledButton } from '../styles/headerStyles';
import { useDisclosure } from '@chakra-ui/react';

import CustomModal from './Modal';

import logoText from '../assets/logo_text.svg';
import logoIcon from '../assets/logo.svg';
import downIcon from '../assets/down_icon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { logout as userLogout } from '../redux/actions/userLogin';

import { useHistory } from 'react-router-dom';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.user?.user);

  const logout = () => {
    onClose();
    history.push('/app')
    dispatch(userLogout());
  }

  const redirect = (path) => {
    onClose();
    history.push(path);
  }

  return (
    <HeaderContainer>
      <div style={{ cursor: 'pointer' }} onClick={() => history.push('/app')}>
        <img className='logo-text' src={logoText} alt='celloverflow' />
        <img className='logo-icon' src={logoIcon} alt='celloverflow' />
      </div>

      {!user && <Button onClick={() => history.push('/login')}>Login</Button>}
      {user && <CustomModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        ui={
          <Button>
            <p>{user.username}</p>
            <img src={downIcon} alt="more" />
          </Button>
        }
        title='Options ⚙️'
      >
        <StyledButton onClick={() => redirect(`/ask`)} style={{ background: 'var(--accent-color)' }}>Ask Question ❓</StyledButton>
        <StyledButton onClick={() => redirect(`/user/${user?.username}`)} style={{ background: 'var(--accent-color)' }}>Profile 😊</StyledButton>
        <StyledButton onClick={() => redirect(`/settings`)} style={{ background: 'var(--accent-color)' }}>Settings ‍🧰</StyledButton>
        <StyledButton onClick={logout} style={{ background: 'var(--error-color)' }}>Logout 🚶‍♂️</StyledButton>
      </CustomModal>}
    </HeaderContainer>
  )
}
