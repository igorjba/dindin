import './styles.css';
import SignInForm from '../../components/SignInForm';
import { Link } from 'react-router-dom';

export default function SignIn( { setUser } ) {
  return (
      <div className='container-signin'>
        <div className='pitch'>
        <h1>Controle suas <span id='finances'>finanças</span>, sem planilha  chata.</h1>
        <p>Organizar as suas finanças nunca foi tão fácil, com o DINDIN,
          você tem tudo num único lugar e em um clique de distância.</p>
          <Link to='/signup' style={{textDecoration: 'none'}}>
            <button>Cadastre-se</button>
          </Link>
        </div>
        <SignInForm setUser={ setUser }/>
      </div>
  )
};
