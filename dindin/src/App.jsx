import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/routes.jsx';
import './styles.css';

export default function App() {

  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  )
};
