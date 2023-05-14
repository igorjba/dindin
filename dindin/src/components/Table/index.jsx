import './styles.css';
import Filter from './Filter';
import Listing from './Listing';
import TableHeader from './TableHeader';
import Summary from './Summary';
import AddTransactionModal from './AddTransactionModal';
import EditTransactionModal from './EditTransactionModal';
import RecordModal from '../RecordModal';
import { useState, useEffect, useRef } from 'react';
import { getItem } from '../../utils/storage';
import api from '../../services/api';

export default function Table({ makeLogout }) {

  useEffect(() => {
    retrieveCategories();
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
      response = await api.get('/transacao', { headers: { Authorization: `Bearer ${token}` } });
    } catch (error) {
      window.alert(error.response.data.mensagem);
      makeLogout();
    }

    if (response) {
      const localTransactions = [];

      for (let i = 0; i < response.data.length; i++) {
        const { id, tipo: type, descricao: description, valor: value, data: date, usuario_id: userid, categoria_id: categoryid, categoria_nome: categoryname } = response.data[i];
        const transaction = { id, type, description, value, date, userid, categoryid, categoryname };
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
    localTransactions.forEach(transaction => localCategories.indexOf(transaction.categoryname) < 0 ? localCategories.push(transaction.categoryname) : false);
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

  async function retrieveCategories() {
    let response;
    const token = getItem('token');
    try {
      response = await api.get('/categoria', { headers: { Authorization: `Bearer ${token}` } });
    } catch (error) {
      window.alert(error);
    }
    const categories = response.data;
    return setAllCategories(categories);
  }

  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const summaryRef = useRef({ inflows: 0, outflows: 0, balance: 0 });

  const filterStart = {};
  categories.forEach(category => filterStart[category] = true);
  const [activeFilters, setActiveFilters] = useState(filterStart);

  const [activeAddTransactionModal, setActiveAddTransactionModal] = useState(false);
  const [activeEditTransactionModal, setActiveEditTransactionModal] = useState(false);

  const [showRecordModal, setShowRecordModal] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  //enviar o id da transação do listing para o modal de edição.
  const [transactionId, setTransactionId] = useState({});

  return (
    <main>
      <div className='table'>
        <Filter setActiveFilters={setActiveFilters} categories={categories} filterStart={filterStart} />
        <TableHeader />
        <Listing transactions={transactions} setTransactions={setTransactions}
          setActiveEditTransactionModal={setActiveEditTransactionModal}
          activeEditTransactionModal={activeEditTransactionModal}
          activeFilters={activeFilters}
          updateTransactions={updateTransactions}
          setTransactionId={setTransactionId}

        />
        <AddTransactionModal
          setActiveAddTransactionModal={setActiveAddTransactionModal} activeAddTransactionModal={activeAddTransactionModal}
          transactions={transactions} setTransactions={setTransactions}
          allCategories={allCategories}
          updateTransactions={updateTransactions}
        />
        {activeEditTransactionModal && <EditTransactionModal
          setActiveEditTransactionModal={setActiveEditTransactionModal} activeEditTransactionModal={activeEditTransactionModal}
          transactions={transactions} setTransactions={setTransactions}
          allCategories={allCategories}
          updateTransactions={updateTransactions}
          transactionId={transactionId}

        /> }
        {/* {showRecordModal &&
          <RecordModal
            updateTransactions={updateTransactions}
            showRecordModal={showRecordModal}
            setShowRecordModal={setShowRecordModal}
            allCategories={allCategories} />} */}
      </div>
      <Summary
        summaryRef={summaryRef}
        setActiveAddTransactionModal={setActiveAddTransactionModal}
        activeAddTransactionModal={activeAddTransactionModal}
        showRecordModal={showRecordModal}
        setShowRecordModal={setShowRecordModal}
      />
    </main>
  )
}