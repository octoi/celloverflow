import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserDetailsContainer } from '../../styles/appStyles';

export default function UserDetails() {
  const user = useSelector(state => state.user.user)

  const history = useHistory();

  console.log(user);

  return (
    <UserDetailsContainer>
      <div className="profile">
        <img src={user?.profile} alt={user?.name} />
        <div>
          <h2>{user?.name}</h2>
          <h3>@{user?.username}</h3>
        </div>
      </div>
      <div className="stats">
        {user?.occupation && <h3>{user?.occupation}</h3>}
        {user?.website && <a href={user?.website}>{user?.website}</a>}
        {user?.bio && <p>{user?.bio}</p>}
      </div>
      <button onClick={() => history.push('/settings')}>Settings</button>
    </UserDetailsContainer>
  );
}