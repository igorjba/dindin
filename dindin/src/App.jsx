import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/routes.jsx';
import OutsideBackground from './assets/bg-out.svg';
import InsideBackground from './assets/bg-in.svg';
import Header from './components/Header';

export default function App() {
  const logged = true;
  const user = 'thiago';
  /* logged ? bg-in and block access to / and /signin
     : !logged ? bg-out and block access to /home */

  return (
    <div className='app' style={logged ? {backgroundImage: `url(${InsideBackground})`} : {backgroundImage: `url(${OutsideBackground})`}}>
      <Header logged={logged} user={user}/>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  )
};
