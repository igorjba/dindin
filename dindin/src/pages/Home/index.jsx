import './styles.css';
import Table from '../../components/Table';
import AddTransactionModal from '../../components/Table/AddTransactionModal';

export default function Home() {
  return (
    <div className='home-container'>
      <Table />
      <AddTransactionModal />
    </div>
  )
}
