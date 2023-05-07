import './styles.css';

export default function Header({logged, user}) {

  return (
      <header>
        <div className='logo'/>
        { logged && 
        <div className='user-menu'>
          <div className='profile-pic'/>
          <span className='profile-name'>{user}</span>
          <div className='logout-btn'/>
        </div>
        }
      </header>
  )
};
