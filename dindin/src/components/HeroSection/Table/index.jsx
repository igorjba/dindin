import './styles.css';
import Filter from './Filter';
import Listing from './Listing';
import TableHeader from './TableHeader';

export default function Table() {

  return (
      <div className='table'>
        <Filter />
        <TableHeader/>
        <Listing />
      </div>
  )
};
