import './styles.css';
import SignUpForm from '../../components/SignUpForm';

export default function SignUp({setUser}) {
  setUser(null);
  return (
      <div className='container-signup'>
        <SignUpForm />
      </div>
  )
};
