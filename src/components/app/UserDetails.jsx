import React from 'react';
import { useSelector } from 'react-redux';
import { UserDetailsContainer } from '../../styles/appStyles';

export default function UserDetails() {
  const user = useSelector(state => state.user.user)

  return (
    <UserDetailsContainer>
      <div className="profile">
        <img src={user?.profile} alt={user?.name} />
        <div>
          <h2>{user?.name}</h2>
          <h3>@{user?.username}</h3>
        </div>
      </div>
    </UserDetailsContainer>
  );
}