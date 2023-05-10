import './styles.css'
import editIcon from '../../../assets/edit-icon.svg'
import trashIcon from '../../../assets/trash-icon.svg'
import { useState } from 'react'

export default function Listing() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '01/09/21',
      weekday: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      value: 'R$10000,00',
    }
    ,
    {
      id: 2,
      date: '01/09/21',
      weekday: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      value: 'R$100,00',
    },
    {
      id: 3,
      date: '01/09/21',
      weekday: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      value: '-R$100,00'
    },
    {
      id: 4,
      date: '01/09/21',
      weekday: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      value: '-R$100,00'
    },
    {
      id: 5,
      date: '01/09/21',
      weekday: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      value: 'R$100,00',
    },
    {
      id: 6,
      date: '01/09/21',
      weekday: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      value: 'R$100,00',
    },
    {
      id: 7,
      date: '01/09/21',
      weekday: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      value: 'R$100,00',
    },
    {
      id: 8,
      date: '01/09/21',
      weekday: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      value: 'R$100,00',
    },
    {
      id: 9,
      date: '01/09/21',
      weekday: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      value: 'R$100,00',
    },

    {
      id: 10,
      date: '01/09/21',
      weekday: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      value: '-R$100,00',
    }
  ])

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

            style={{ color: transaction.value.includes('-') ? '#FA8C10' : '#7B61FF' }}
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


