import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/routes.jsx';
import SignUpForm from './components/SignUpForm';
import OutsideBackground from './assets/bg-out.svg';
import InsideBackground from './assets/bg-in.svg';

export default function App() {

  return (
    <div className='app' style={{backgroundImage: `url(${OutsideBackground})`}}> {/* check how bg will be rendered */}
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  )
};
