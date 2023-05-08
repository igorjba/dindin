import './styles.css';
import Filter from './Filter';
import Listing from './Listing';
import TableHeader from './TableHeader';
import Summary from './Summary';
import { useState } from 'react';

export default function Table() {

  // get input data from api, generate categories, filterStart, summary, 

  const categories = ['contas', 'depósito', 'água', 'lazer', 'mercado', 'TED', 'compras', 'farmácia', 'PIX'];
  const filterStart = {};
  categories.forEach(category => filterStart[category] = true);
  const [activeFilters, setActiveFilters] = useState(filterStart);

  const summary = {inflows: 200, outflows: 70.5, balance: 129.5};

  return (
    <main>
      <div className='table'>
        <Filter setActiveFilters={setActiveFilters} categories={categories} filterStart={filterStart}/>
        <TableHeader/>
        <Listing />
      </div>
      <Summary summary={summary}/>
    </main>
  )
};