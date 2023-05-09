import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Header from '../components/Header';
import OutsideBackground from '../assets/bg-out.svg';
import InsideBackground from '../assets/bg-in.svg';

export default function MainRoutes() {

    const [user, setUser] = useState({name: 'zoroastro almeida santos mocotó silva'});
    // null or user object {id, name, etc}
    // call setUser only in login or logout. it retrieves from api the user data and defines the user obj

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
        <div className='app' style={user ? {backgroundImage: `url(${InsideBackground})`} : {backgroundImage: `url(${OutsideBackground})`}}>
        <Header logged={user ? true : false} user={user ? user.name : ''}/>
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
        </div>
    )
}