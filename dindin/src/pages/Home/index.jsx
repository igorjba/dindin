import './styles.css';
import Table from '../../components/Table';

export default function Home( { makeLogout } ) {
  return (
    <div className='home-container'>
      <Table makeLogout={makeLogout}/>
    </div>
  )
}