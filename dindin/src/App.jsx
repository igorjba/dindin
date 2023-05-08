import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/routes.jsx';
import OutsideBackground from './assets/bg-out.svg';
import InsideBackground from './assets/bg-in.svg';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState({name: 'zoroastro almeida santos mocotó silva'});
  // null or user object {id, name, etc}
  // call setUser only in login or logout. it retrieves from api the user data and defines the user obj


  return (
    <div className='app' style={user ? {backgroundImage: `url(${InsideBackground})`} : {backgroundImage: `url(${OutsideBackground})`}}>
      <Header logged={user ? true : false} user={user ? user.name : ''}/>
      <BrowserRouter>
        <MainRoutes setUser={setUser}/>
      </BrowserRouter>
    </div>
  )
};
