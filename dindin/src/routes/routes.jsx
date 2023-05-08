import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

export default function MainRoutes({ setUser }) {

    function getAuth() { // check if token in localstorage, check if token is valid
        return auth ? true : false;
    }

    function RequireAuth({ children, redirectTo }) {
        let isAuthenticated = true; // getAuth();
        return isAuthenticated ? children : <Navigate to={redirectTo} />;
    }

    function RequireNotAuth({ children, redirectTo }) {
        let isAuthenticated = false; // getAuth();
        return !isAuthenticated ? children : <Navigate to={redirectTo} />;
    }

    return (
        <Routes>
            <Route path='/' element={
                <RequireNotAuth redirectTo='/home'>
                    <SignIn setUser={setUser}/>
                </RequireNotAuth>
            } />

            <Route path='/signup' element={
                <RequireNotAuth redirectTo='/home'>
                    <SignUp setUser={setUser}/>
                </RequireNotAuth>
            } />

            <Route path='/home' element= {
                <RequireAuth redirectTo='/'>
                    <Home setUser={setUser}/>
                </RequireAuth>
            }/> 
        </Routes>
    )
}