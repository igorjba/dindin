import { useState } from 'react';
import ArrowDownIcon from '../../../assets/arrow-bottom.svg';
import ArrowUpIcon from '../../../assets/arrow-top.svg';
import './styles.css';

export default function TableHeader() {

  const [order, setOrder] = useState(true);

  return (
    <div className='table-header round'>
      <div className='header-date' onClick={() => setOrder(!order)}>
        <strong>Data</strong><img src={order ? ArrowUpIcon : ArrowDownIcon} />
      </div>
      <strong>Dia da semana</strong>
      <strong>Descrição</strong>
      <strong>Categoria</strong>
      <strong className='header-value'>Valor</strong>
      <strong></strong>
    </div>
  )
}
