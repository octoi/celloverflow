import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserDetailsContainer } from '../../styles/appStyles';

export default function UserDetails() {
  const user = useSelector(state => state.user.user)

  const history = useHistory();

  return (
    <UserDetailsContainer>
      <div className="profile">
        <img src={user?.profile} alt={user?.name} />
        <div>
          <h2>{user?.name}</h2>
          <h3>@{user?.username}</h3>
        </div>
      </div>
      <button onClick={() => history.push('/settings')}>Settings</button>
    </UserDetailsContainer>
  );
}