import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

export default function MainRoutes() {

    function RequireAuth({ children, redirectTo }) {
        let isAuthenticated = true; // getAuth();
        return isAuthenticated ? children : <Navigate to={redirectTo} />;
      }

    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/home' element= {
                <RequireAuth redirectTo='/'>
                    <Home />
                </RequireAuth>
            }/> 
        </Routes>
    )
}