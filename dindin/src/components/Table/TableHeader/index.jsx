import './styles.css';
import ArrowUpIcon from '../../../assets/arrow-top.svg';
import ArrowDownIcon from '../../../assets/arrow-bottom.svg';
import { useState } from 'react';

export default function TableHeader() {

  const [order, setOrder] = useState(true); // add sorting logic above on table

  return (
      <div className='table-header round'>
        <div className='header-date' onClick={() => setOrder(!order)}>
          <strong>Data</strong><img src={order ? ArrowUpIcon : ArrowDownIcon}/>
        </div>
        <strong>Dia da semana</strong>
        <strong>Descrição</strong>
        <strong>Categoria</strong>
        <strong>Valor</strong>
        <strong></strong>
      </div>
  )
};
