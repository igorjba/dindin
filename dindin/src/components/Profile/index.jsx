import './styles.css';
import { useState, useRef, useEffect } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';

export default function Profile( { showProfile, setShowProfile, user, setUser } ) {

  const [profile, setProfile] = useState({name: user.name, email: user.email, password:'', pwcheck:''});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const profileNameRef = useRef(null);
  const profileEmailRef = useRef(null);

  useEffect(() => {
    profileNameRef.current.value = user.name;
    profileEmailRef.current.value = user.email;
  }, [])

  async function changeProfile() {
    let response;
    const token = getItem('token');
    const data = {nome: profile.name, email: profile.email, senha: profile.password};
    try {
      response = await api.put('/usuario', data, {headers: {Authorization: `Bearer ${token}`}});
    } catch (error) {
      window.alert(error.response.data.mensagem);
    }
    if (response) {
      setSuccess('Usuário atualizado com sucesso!');
      setUser({...user, name: profile.name, email: profile.email});
    }
    return
  }

  function handleInput(event) {
    const profileInfo = {...profile, [event.target.name]: event.target.value};
    return setProfile(profileInfo);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!profile.name) return setError('O campo nome é obrigatório');
    if (!profile.email) return setError('O campo e-mail é obrigatório');
    if(!profile.password) return setError('O campo senha é obrigatório');
    if(!profile.pwcheck || profile.pwcheck != profile.password) return setError('As senhas não conferem');

    changeProfile();
  }

  return (
      <div className='profile-container'>
        <form className='profile-modal round'>
          <div className='profile-modal-header'><h1>Editar Perfil</h1><div className='btn-close' onClick={() => setShowProfile(!showProfile)}/></div>
          
          <div className='input-container'>
            <label className='profile-input-label'>Nome</label>
            <input type='text' name='name' id='name' onChange={ handleInput } ref={profileNameRef}/>
          </div>

          <div className='input-container'>
            <label className='profile-input-label'>E-mail</label>
            <input type='email' name='email' id='email' onChange={ handleInput } ref={profileEmailRef}/>
          </div>

          <div className='input-container'>
            <label className='profile-input-label'>Senha</label>
            <input type='password' name='password' id='password' onChange={ handleInput }/>
          </div>

          <div className='input-container'>
            <label className='profile-input-label'>Confirmação de senha</label>
            <input type='password' name='pwcheck' id='pwcheck' onChange={ handleInput }/>
          </div>

          <button type='button' onClick={ handleSubmit }>Confirmar</button>
          {<p className={error ? 'error' : 'success'}>{error ? error : success ? success : ''}</p>}
        </form>
      </div>
  )
};
