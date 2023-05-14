import Table from '../../components/Table';
import './styles.css';

export default function Home({ makeLogout }) {
  return (
    <div className='home-container'>
      <Table makeLogout={makeLogout} />
    </div>
  )
}