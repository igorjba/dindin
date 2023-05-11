import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
import { setItem } from '../../utils/storage';
import api from '../../services/api';


export default function SignInForm( { setUser } ) {

  const [login, setlogin] = useState({email:'', password:''});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function makeLogin() {
    let response;
    try {
      response = await api.post('/login', {email: login.email, senha: login.password});
    } catch (error) {
      setError(error.response.data.mensagem);
    }
    if (response) {
      const token = response.data.token;
      const {id, email, nome: name} = response.data.usuario;

      setItem('token', token);
      
      setUser({id, name, email});
      return navigate("/home");
    }
    return;
  }

  function handleInput(event) {
    const loginInfo = {...login, [event.target.name]: event.target.value};
    setlogin(loginInfo);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!login.email) return setError('Preencha seu e-mail');
    if(!login.password) return setError('Preencha sua senha');

    makeLogin();
    
  }

  return (
    <form className='login-form'>
      <h1>Login</h1>
      
      <div className='input-container'>
        <label htmlFor='email'>E-mail</label>
        <input type='email' name='email' id='email' onChange={ handleInput }/>
      </div>

      <div className='input-container'>
        <label htmlFor='password'>Senha</label>
        <input type='password' name='password' id='password' onChange={ handleInput }/>
      </div>

      <button type='button' onClick={ handleSubmit }>Entrar</button>      

      {error && <strong>{error}</strong>}
      
    </form>
  )
};