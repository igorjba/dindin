import './styles.css';
import Filter from './Filter';
import Listing from './Listing';
import TableHeader from './TableHeader';

export default function Table() {

  const categories = ['contas', 'depósito', 'água', 'lazer', 'mercado', 'TED', 'compras', 'farmácia', 'PIX'];
  const filterStart = {};
  categories.forEach(category => filterStart[category] = true);

  function applyFilters(reference) {
    console.log(reference)
    // dictates what data is spawned in transactions. 
    // by default, everything in reference object is true.
    // when applyFilters is called, define contents of selectedFilters to reference obj;
  }

  return (
      <div className='table'>
        <Filter applyFilters={applyFilters} categories={categories} filterStart={filterStart}/>
        <TableHeader/>
        <Listing />
      </div>
  )
};
