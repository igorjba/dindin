import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css'

export default function SignInForm() {

  const [login, setlogin] = useState({email:'', password:''});
  const [error, setError] = useState('');

  function handleInput(event) {
    const loginInfo = {...login, [event.target.name]: event.target.value};
    setlogin(loginInfo);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!login.email) return setError('Preencha seu e-mail');
    if(!login.password) return setError('Preencha sua senha');

    // try {chamar api para validar usuário}
    // catch(error) {return feedback visual falha}
    // salvar token e userId no localStorage
    
    // redirecionar para /home
    
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