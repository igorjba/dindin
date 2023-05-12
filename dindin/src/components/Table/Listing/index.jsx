import './styles.css';
import editIcon from '../../../assets/edit-icon.svg';
import trashIcon from '../../../assets/trash-icon.svg';
import { format } from 'date-fns';


export default function Listing( { transactions } ) {

  function spawnTransaction(transaction) {
    const date = format(new Date(transaction.date), 'dd/MM/uuuu');
    const weekday = format(new Date(transaction.date), 'eeee');

    return <li
    className='transaction'
    key={transaction.id}
  >
    <div className='transaction-date'>{date}</div>
    <div className='transaction-weekday'>{weekday}</div>
    <div className='transaction-description'>{transaction.description}</div>
    <div className='transaction-category'>{transaction.categoryname}</div>
    <div className="transaction-value"
      style={{ color: transaction.value < 0 ? '#FA8C10' : '#7B61FF' }}
    >
      R$ {transaction.value < 0 ? '-' : ''}{(transaction.value / 100).toFixed(2)}
    </div>

    <div className="transaction-edit-container">
      <img
        className='transaction-edit'
        src={editIcon}
        alt="Edit Icon"
      />

      <div
        className='transaction-delete'
        src={trashIcon}
        alt="Trash Icon"
      >
        <div className="transaction-delete-popup">
          <div className='popup-rectangle'>
            <div className='popup-triangle'></div>
            <span className="transaction-edit-popup-text">Apagar item?</span>
            <div className='btn-delete-popup-container'>
              <button className="btn-delete-transaction">Sim</button>
              <button className="btn-cancel-delete-transaction">Não</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
  }
// figure out how to make the content perfectly aligned with the headers
// max-width for each section?
  return (
    <div className='table-list' style={{width: '100%'}}>
      {transactions.map(transaction => spawnTransaction(transaction))}
    </div >
  )
}


