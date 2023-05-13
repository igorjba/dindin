import './styles.css';
import Filter from './Filter';
import Listing from './Listing';
import TableHeader from './TableHeader';
import Summary from './Summary';
import AddTransactionModal from './AddTransactionModal';
import EditTransactionModal from './EditTransactionModal';
import { useState } from 'react';

export default function Table() {

  // get input data from api, generate categories, filterStart, summary, 

  const categories = ['contas', 'depósito', 'água', 'lazer', 'mercado', 'TED', 'compras', 'farmácia', 'PIX'];
  const filterStart = {};
  categories.forEach(category => filterStart[category] = true);
  const [activeFilters, setActiveFilters] = useState(filterStart);

  const summary = { inflows: 200, outflows: 70.5, balance: 129.5 };

  const [activeAddTransactionModal, setActiveAddTransactionModal] = useState(false);
  const [activeEditTransactionModal, setActiveEditTransactionModal] = useState(false);

  const [transactions, setTransactions] = useState([
    // {
    //   id: 1,
    //   date: '01/09/21',
    //   type: 'input',
    //   weekday: 'Quarta',
    //   description: 'Venda dos brigadeiros',
    //   category: 'Pix',
    //   value: 'R$10000,00',
    // }
    // ,
    // {
    //   id: 2,
    //   date: '01/09/21',
    //   type: 'input',
    //   weekday: 'Quarta',
    //   description: 'Venda dos brigadeiros',
    //   category: 'Pix',
    //   value: 'R$100,00',
    // },
    // {
    //   id: 3,
    //   date: '01/09/21',
    //   type: 'output',
    //   weekday: 'Quarta',
    //   description: 'Venda dos brigadeiros',
    //   category: 'Pix',
    //   value: '-R$100,00'
    // },
    // {
    //   id: 4,
    //   date: '01/09/21',
    //   type: 'output',
    //   weekday: 'Quarta',
    //   description: 'Venda dos brigadeiros',
    //   category: 'Pix',
    //   value: '-R$100,00'
    // },
    // {
    //   id: 5,
    //   date: '01/09/21',
    //   type: 'input',
    //   weekday: 'Quarta',
    //   description: 'Venda dos brigadeiros',
    //   category: 'Pix',
    //   value: 'R$100,00',
    // },
    // {
    //   id: 6,
    //   date: '01/09/21',
    //   type: 'input',
    //   weekday: 'Quarta',
    //   description: 'Venda dos brigadeiros',
    //   category: 'Pix',
    //   value: 'R$100,00',
    // },
    // {
    //   id: 7,
    //   date: '01/09/21',
    //   type: 'input',
    //   weekday: 'Quarta',
    //   description: 'Venda dos brigadeiros',
    //   category: 'Pix',
    //   value: 'R$100,00',
    // },
    // {
    //   id: 8,
    //   date: '01/09/21',
    //   type: 'input',
    //   weekday: 'Quarta',
    //   description: 'Venda dos brigadeiros',
    //   category: 'Pix',
    //   value: 'R$100,00',
    // },
    // {
    //   id: 9,
    //   date: '01/09/21',
    //   type: 'input',
    //   weekday: 'Quarta',
    //   description: 'Venda dos brigadeiros',
    //   category: 'Pix',
    //   value: 'R$100,00',
    // },

    // {
    //   id: 10,
    //   date: '01/09/21',
    //   type: 'output',
    //   weekday: 'Quarta',
    //   description: 'Venda dos brigadeiros',
    //   category: 'Pix',
    //   value: '-R$100,00',
    // }
  ])


  return (
    <main>
      <div className='table'>
        <Filter setActiveFilters={setActiveFilters} categories={categories} filterStart={filterStart} />
        <TableHeader />
        <Listing transactions={transactions} setTransactions={setTransactions}
          setActiveEditTransactionModal={setActiveEditTransactionModal}
          activeEditTransactionModal={activeEditTransactionModal}

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
        summary={summary}
        setActiveAddTransactionModal={setActiveAddTransactionModal}
        activeAddTransactionModal={activeAddTransactionModal}
      />
    </main>
  )
}