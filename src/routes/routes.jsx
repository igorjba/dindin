import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import InsideBackground from '../assets/bg-in.svg';
import OutsideBackground from '../assets/bg-out.svg';
import Header from '../components/Header';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import api from '../services/api';
import { clearItems, getItem } from '../utils/storage';

export default function MainRoutes() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getAuth() {
            const token = getItem('token');
            if (!token) return makeLogout();
            let response;
            try {
                response = await api.get('/usuario', { headers: { Authorization: `Bearer ${token}` } });
            } catch (error) {
                window.alert(error.response.data.mensagem);
                makeLogout();
            }

            if (response) {
                const { id, nome: name, email } = response.data;
                setUser({ id, name, email });
            }
            return
        }
        getAuth();
    }, []);

    function makeLogout() {
        clearItems();
        return setUser(null);
    }

    function RequireAuth({ children, redirectTo }) { return user ? children : <Navigate to={redirectTo} /> }
    function RequireNotAuth({ children, redirectTo }) { return !user ? children : <Navigate to={redirectTo} /> }

    return (
        <div className='app' style={user ? { backgroundImage: `url(${InsideBackground})` } : { backgroundImage: `url(${OutsideBackground})` }}>
            <Header logged={user ? true : false} user={user} makeLogout={makeLogout} setUser={setUser} />
            <Routes>
                <Route path='/' element={
                    <RequireNotAuth redirectTo='/home'>
                        <SignIn setUser={setUser} />
                    </RequireNotAuth>
                } />

                <Route path='/signup' element={
                    <RequireNotAuth redirectTo='/home'>
                        <SignUp />
                    </RequireNotAuth>
                } />

                <Route path='/home' element={
                    <RequireAuth redirectTo='/'>
                        <Home makeLogout={makeLogout} />
                    </RequireAuth>
                } />
            </Routes>
        </div>
    )
}