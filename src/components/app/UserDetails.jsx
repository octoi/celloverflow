import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { getUserDataByUsername } from '../../firebase/helpers/userHelper';
import { UserDetailsContainer } from '../../styles/appStyles';

export default function UserDetails({ targetUsername }) {
  const [user, setUser] = useState();

  let currentUser = useSelector(state => state.user.user)

  const showToast = useToast();
  const history = useHistory();

  useEffect(() => {
    if (!targetUsername) {
      setUser(currentUser);
    } else {
      getUserDataByUsername(targetUsername).then(userData => {
        setUser(userData);
      }).catch(err => {
        setUser(currentUser);
        showToast({
          title: err || 'Failed to find user 😟',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
          status: 'error',
        });
        history.push('/app')
      })
    }
  }, [targetUsername, currentUser, showToast, history]);

  return (
    <UserDetailsContainer className='profile-hide'>
      {!user && <p>Loading ...</p>}
      {user && <>
        <div className="profile">
          <img src={user?.profile} alt={user?.name} />
          <div>
            <h2>{user?.name}</h2>
            <h3>@{user?.username}</h3>
          </div>
        </div>
        <div className="stats">
          {user?.occupation && <h3>{user?.occupation}</h3>}
          {user?.website && <p>
            <a href={user?.website}>{user?.website}</a>
          </p>}
          {user?.bio && <p>{user?.bio}</p>}
        </div>
      </>}
      {user?.email === currentUser?.email && <button
        onClick={() => history.push('/settings')}
      >Settings</button>}
    </UserDetailsContainer>
  );
}