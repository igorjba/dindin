import './styles.css';
import Filter from './Filter';
import Listing from './Listing';
import TableHeader from './TableHeader';
import Summary from './Summary';
import AddTransactionModal from './AddTransactionModal';
import EditTransactionModal from './EditTransactionModal';
import { useState, useEffect, useRef } from 'react';
import { getItem } from '../../utils/storage';
import api from '../../services/api';

export default function Table( { makeLogout } ) {

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {

    const token = getItem('token');
    let response;
    try {
        response = await api.get('/transacao', {headers: {Authorization: `Bearer ${token}`}});
    } catch (error) {
        window.alert(error.response.data.mensagem);
        makeLogout();
    }

    if (response){
      const localTransactions = [];
      for (let i = 0; i < response.data.length; i++) {
        const {id, tipo: type, descricao: description, valor: value, data: date, usuario_id: userid, categoria_id: categoryid, categoria_nome: categoryname} = response.data[i];
        const transaction = {id, type, description, value, date, userid, categoryid, categoryname};
        localTransactions.push(transaction);
      }

      setTransactions(localTransactions);
      updateSummary();
      return updateCategories();
    }
    return;
  }

  function updateCategories() {
    const localCategories = transactions.map(transaction => categories.indexOf(transaction.type) < 0);
    return setCategories(localCategories);
  }

  function updateSummary() {
    let inflows = 0;
    let outflows = 0;

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].type === 'entrada') inflows += transactions[i].value;
      else outflows += transactions[i].value;
    }

    const balance = inflows - outflows;

    // check if this is working
    summaryRef.current.inflows = inflows;
    summaryRef.current.outflows = outflows;
    summaryRef.current.balance = balance;
    return;
  }

  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const summaryRef = useRef({ inflows: 0, outflows: 0, balance: 0 });

  const filterStart = {};
  categories.forEach(category => filterStart[category] = true);
  const [activeFilters, setActiveFilters] = useState(filterStart);

  return (
    <main>
      <div className='table'>
        <Filter setActiveFilters={setActiveFilters} categories={categories} filterStart={filterStart} />
        <TableHeader />
        <Listing />
        {/* <AddTransactionModal /> */}
        {/* <EditTransactionModal /> */}
      </div>
      <Summary summaryRef={summaryRef} />
    </main>
  )
}