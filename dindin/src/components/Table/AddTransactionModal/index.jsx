import './styles.css'
import { useState } from 'react';

export default function AddTransactionModal({ activeAddTransactionModal, setActiveAddTransactionModal, transactions, setTransactions }) {

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Pix'
    },
    {
      id: 2,
      name: 'Lazer'
    },
    {
      id: 3,
      name: 'Alimentação'
    },
    {
      id: 4,
      name: 'TED'
    },
    {
      id: 5,
      name: 'Contas'
    },
    {
      id: 6,
      name: 'Depósito'
    },
    {
      id: 7,
      name: 'Mercado'
    },
    {
      id: 8,
      name: 'Farmácia'
    },
  ])

  const [transactionType, setTransactionType] = useState('input')

  const [transaction, setTransaction] = useState({
    value: '',
    category: '',
    date: '',
    description: '',
  })

  const handleTransactionType = (type) => {
    setTransactionType(type)
  }

  const handleTransaction = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: event.target.value
    })
  }

  const handleAddTransaction = () => {
    const newTransaction = {
      id: transactions[transactions.length - 1].id + 1,
      type: transactionType,
      value: transaction.value,
      category: transaction.category,
      date: transaction.date,
      description: transaction.description,
    }
    console.log(newTransaction)
  }

  return (
    <div className={activeAddTransactionModal ? "modal-add-transaction " : "modal-add-transaction hidden"}>
      <div className="modal-add-transaction-container">
        <div className="modal-add-transaction-header">
          <h1 className="tittle">Adicionar Registro</h1>
          <div
            className='btn-close'
            onClick={() => setActiveAddTransactionModal(!activeAddTransactionModal)}
          ></div>
        </div>
        <div className="transaction-type-container">
          <button
            className="btn-transaction-input btn-inactive"
            // className={transactionType === 'input' ? 'btn-transaction-input' : 'btn-transaction-input btn-inactive'}
            onClick={() => handleTransactionType('input')}
          >Entrada
          </button>
          <button
            className={transactionType === 'output' ? 'btn-transaction-output' : 'btn-transaction-output btn-inactive'}
            onClick={() => handleTransactionType('output')}
          >Saída</button>
        </div>
        <div className="modal-inputs">
          <div className="modal-value">
            <label htmlFor='value' className="modal-value-text input-label">Valor</label>
            <input
              className="modal-value-input"
              type="number"
              id='value'

            />
          </div>
          <div className="modal-category">
            <label htmlFor='category' className="modal-category-text input-label">Categoria</label>
            <div className='category-box'>
              <select className="category-select" id='category'>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="modal-date">
            <label htmlFor='date' className="modal-date-text input-label">Data</label>
            <input className="modal-date-input" type="date" id='date' />
          </div>
          <div className="modal-description">
            <label htmlFor="description" className="modal-description-text input-label">Descrição</label>
            <input className="modal-description-input" type="text" maxLength={21} id='description' />
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="modal-btn-confirm"
            onClick={() => handleAddTransaction()}
          >Confirmar</button>
        </div>
      </div>
    </div>
  )
}
