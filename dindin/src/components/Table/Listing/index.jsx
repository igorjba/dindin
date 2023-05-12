import './styles.css'
import editIcon from '../../../assets/edit-icon.svg'
import trashIcon from '../../../assets/trash-icon.svg'
import { useState } from 'react'

export default function Listing({ transactions, setTransactions }) {
  return (
    <ul className='table-list'>
      {transactions.map((transaction) => (

        <li
          className='transaction'
          key={transaction.id}
        >
          <span className='transaction-date'>{transaction.date}</span>
          <span className='transaction-weekday'>{transaction.weekday}</span>
          <span className='transaction-description'>{transaction.description}</span>
          <span className='transaction-category'>{transaction.category}</span>
          <span
            className="transaction-value"
            style={{ color: transaction.type === 'input' ? '#7B61FF' : '#FA8C10' }}
          >
            {transaction.value}
          </span>

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
      ))
      }
    </ul >
  )
}


