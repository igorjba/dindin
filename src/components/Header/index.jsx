import { useState } from 'react';
import Profile from '../Profile';
import './styles.css';

export default function Header({ logged, user, makeLogout, setUser }) {

  const [showProfile, setShowProfile] = useState(false);

  return (
    <header>
      <div className='logo' />
      {logged &&
        <div className='user-menu'>
          <div className='profile-pic' onClick={() => setShowProfile(!showProfile)} />
          <span className='profile-name'>{user.name}</span>
          <div className='logout-btn' onClick={makeLogout} />
        </div>
      }
      {showProfile && <Profile showProfile={showProfile} setShowProfile={setShowProfile} user={user} setUser={setUser} />}
    </header>
  )
}
