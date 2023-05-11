import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
import api from '../../services/api';

export default function SignUpForm() {

  const [signUp, setSignUp] = useState({name: '', email:'', password:'', pwcheck:''});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  async function makeSignUp() {
    let response;
    try {
      response = await api.post('/usuario', {nome: signUp.name, email: signUp.email, senha: signUp.password});
    } catch (error) {
      window.alert(error.response.data.mensagem);
    }
    if (response) {
      setSuccess(true);
      return setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    return
  }

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

    makeSignUp();
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
      {success && <span style={{color: 'green'}}>Cadastro efetuado com sucesso!</span>}
      
    </form>
  )
};