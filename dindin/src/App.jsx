import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/routes.jsx';

export default function App() {

  return (
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
  )
};
