import './styles.css';

export default function Header({logged, user, makeLogout}) {

  function openProfile() {
    return;
  }

  return (
      <header>
        <div className='logo'/>
        { logged && 
        <div className='user-menu'>
          <div className='profile-pic' onClick={openProfile}/>
          <span className='profile-name'>{user}</span>
            <div className='logout-btn' onClick={makeLogout}/>
        </div>
        }
      </header>
  )
};
