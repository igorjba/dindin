import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css'

export default function SignUpForm() {

  const [signUp, setSignUp] = useState({name: '', email:'', password:'', pwcheck:''});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function handleInput(event) {
    const signUpInfo = {...signUp, [event.target.name]: event.target.value};
    setSignUp(signUpInfo);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError('');


    if (!signUp.name) return setError('O campo nome é obrigatório');
    if (!signUp.email) return setError('O campo e-mail é obrigatório');
    if(!signUp.password) return setError('O campo senha é obrigatório');
    if(!signUp.pwcheck || signUp.pwcheck != signUp.password) return setError('As senhas não conferem');

    // try {chamar api para cadastrar usuário}
    // catch(error) {return feedback visual falha}
    setSuccess(true);
    // feedback visual sucesso (imagem: Cadastro efetuado com sucesso! Você será redirecionado para a página de login.)
    
    setTimeout(() => {
      //navigate to '/'
    }, 1000);
  }

  return (
    <form className='signup-form'>
      <h1>Cadastre-se</h1>
      
      <div className='input-container'>
        <label htmlFor='name'>Nome</label>
        <input type='text' name='name' id='name' onChange={ handleInput }/>
      </div>

      <div className='input-container'>
        <label htmlFor='email'>E-mail</label>
        <input type='email' name='email' id='email' onChange={ handleInput }/>
      </div>

      <div className='input-container'>
        <label htmlFor='password'>Senha</label>
        <input type='password' name='password' id='password' onChange={ handleInput }/>
      </div>

      <div className='input-container'>
        <label htmlFor='pwcheck'>Confirmação de senha</label>
        <input type='password' name='pwcheck' id='pwcheck' onChange={ handleInput }/>
      </div>

      <button type='button' onClick={ handleSubmit }>Cadastrar</button>
      <Link to='/'>Já tem cadastro? Clique aqui!</Link>
      {error && <span>{error}</span>}
      
    </form>
  )
};