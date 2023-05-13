import './styles.css'
import editIcon from '../../../assets/edit-icon.svg'
import trashIcon from '../../../assets/trash-icon.svg'
import { useState } from 'react'

export default function Listing({ transactions, setTransactions, activeEditTransactionModal, setActiveEditTransactionModal }) {
  const [deletePopup, setDeletePopup] = useState(false)
  const [transactionId, setTransactionId] = useState(0)
  const [transactionIndex, setTransactionIndex] = useState(0)
  const [transactionWeekday, setTransactionWeekday] = useState('')
  const [transactionValue, setTransactionValue] = useState('')


  const handleDeleteTransaction = (id) => {
    const newTransactions = transactions.filter((transaction) => transaction.id !== id)
    setTransactions(newTransactions)
  }

  const handleTransactionId = (id) => {
    setTransactionId(id)
  }

  const handleTransactionIndex = (index) => {
    setTransactionIndex(index)
  }

  const handleTransactionWeekday = (weekday) => {
    setTransactionWeekday(weekday)
  }

  const handleTransactionValue = (value) => {
    setTransactionValue(value)
  }

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
              onClick={() => {
                setActiveEditTransactionModal(!activeEditTransactionModal)
                handleTransactionId(transaction.id)
                handleTransactionIndex(transactions.indexOf(transaction))
                handleTransactionWeekday(transaction.weekday)
                handleTransactionValue(transaction.value)
              }}

            />

            <div
              className='transaction-delete'
              src={trashIcon}
              alt="Trash Icon"
              onClick={() => handleDeleteTransaction(transaction.id)}
            >
              <div
                className={deletePopup ? "transaction-delete-popup" : "transaction-delete-popup hidden"}
              >
                <div className='popup-rectangle'>
                  <div className='popup-triangle'></div>
                  <span className="transaction-edit-popup-text">Apagar item?</span>
                  <div className='btn-delete-popup-container'>
                    <button
                      className="btn-delete-transaction"
                      onClick={() => handleDeleteTransaction(transaction.id)}
                    >Sim</button>
                    <button
                      className="btn-cancel-delete-transaction"
                      onClick={() => setDeletePopup(!deletePopup)}
                    >Não</button>
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


