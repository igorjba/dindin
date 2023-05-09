import './styles.css';
import { Link } from 'react-router-dom';

//change link redirect for logout function -- remove token from localStorage, update user with setUser and navigate to /
export default function Header({logged, user}) {

  return (
      <header>
        <div className='logo'/>
        { logged && 
        <div className='user-menu'>
          <div className='profile-pic'/>
          <span className='profile-name'>{user}</span>
            <Link to='/'><div className='logout-btn' /></Link>
        </div>
        }
      </header>
  )
};
