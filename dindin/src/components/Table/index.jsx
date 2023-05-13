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
    updateTransactions();
  }, []);

  function updateFilters(localCategories) {
    const localFilters = {};
    localCategories.forEach(category => localFilters[category] = true);
    return setActiveFilters(localFilters);
  }

  async function updateTransactions() {

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
      updateSummary(localTransactions);
      updateCategoriesAndFilters(localTransactions);
    }

    return;
  }

  function updateCategoriesAndFilters(localTransactions) {
    const localCategories = [];
    localTransactions.forEach( transaction => localCategories.indexOf(transaction.categoryname) < 0 ? localCategories.push(transaction.categoryname) : false);
    updateFilters(localCategories);
    return setCategories(localCategories);
  }

  function updateSummary(localTransactions) {
    let inflows = 0;
    let outflows = 0;

    for (let i = 0; i < localTransactions.length; i++) {
      if (localTransactions[i].type === 'entrada') inflows += localTransactions[i].value;
      else outflows += localTransactions[i].value;
    }

    const balance = inflows - outflows;

    summaryRef.current.inflows = (inflows / 100);
    summaryRef.current.outflows = (outflows / 100);
    summaryRef.current.balance = (balance / 100);
    return;
  }

  async function postTransaction() {
    const data = {
      tipo: "entrada",
      descricao: "Salário",
      valor: 300000,
      data: "2022-03-24T15:30:00.000Z",
      categoria_id: 5
    };
    const token = getItem('token');
    let response;
    try {
      response = await api.post('/transacao', data, { headers: {Authorization: `Bearer ${token}`} });
    } catch (error) {
      makeLogout();
    }
    return updateTransactions();
  }

  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const summaryRef = useRef({ inflows: 0, outflows: 0, balance: 0 });

  const filterStart = {};
  categories.forEach(category => filterStart[category] = true);
  const [activeFilters, setActiveFilters] = useState(filterStart);

  const [activeAddTransactionModal, setActiveAddTransactionModal] = useState(false);
  const [activeEditTransactionModal, setActiveEditTransactionModal] = useState(false);

  const [transactions, setTransactions] = useState([
    
  ])


  return (
    <main>
      <div className='table'>
        <Filter setActiveFilters={setActiveFilters} categories={categories} filterStart={filterStart} />
        <TableHeader />
        <Listing transactions={transactions} setTransactions={setTransactions}
          setActiveEditTransactionModal={setActiveEditTransactionModal}
          activeEditTransactionModal={activeEditTransactionModal}
          activeFilters={activeFilters}
        />

        <AddTransactionModal
          setActiveAddTransactionModal={setActiveAddTransactionModal}
          activeAddTransactionModal={activeAddTransactionModal}
          transactions={transactions} setTransactions={setTransactions}
        />
        <EditTransactionModal
          setActiveEditTransactionModal={setActiveEditTransactionModal}
          activeEditTransactionModal={activeEditTransactionModal}
          transactions={transactions} setTransactions={setTransactions}

        />
      </div>
      <Summary
        summaryRef={summaryRef}
        setActiveAddTransactionModal={setActiveAddTransactionModal}
        activeAddTransactionModal={activeAddTransactionModal}
      />
    </main>
  )
}