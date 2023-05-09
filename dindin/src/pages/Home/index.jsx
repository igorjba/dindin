import './styles.css';
import Table from '../../components/Table';
import { useEffect } from 'react';

export default function Home({setUser}) {

  // check how logout works regarding to setUser... setUser should be set on token retrieval and on logout
  return (
    <div className='home-container'>
      <Table />
    </div>
  )
};
