import './styles.css';
import SignInForm from '../../components/SignInForm';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {

  return (
      <div className='container-signin'>
        <div className='pitch'>
        <h1>Controle suas <span id='finances'>finanças</span>, sem planilha  chata.</h1>
        <p>Organizar as suas finanças nunca foi tão fácil, com o DINDIN,
          você tem tudo num único lugar e em um clique de distância.</p>
        <button onClick={() => useNavigate('/signup')}>Cadastre-se</button> {/* redirect on click to signup */}
        <Link to='/signup'>Cadastre-se</Link> 
        </div>
        <SignInForm />
      </div>
  )
};
