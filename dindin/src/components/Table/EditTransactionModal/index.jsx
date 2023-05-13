import './styles.css'
import { useState } from 'react';
import api from '../../../services/api';
import { format } from 'date-fns'

export default function EditTransactionModal({ categories, activeEditTransactionModal, setActiveEditTransactionModal, transactions, setTransactions }) {
  const [transactionType, setTransactionType] = useState('input')
  const [transactionValue, setTransactionValue] = useState('')
  const [transactionCategory, setTransactionCategory] = useState('')
  const [transactionDate, setTransactionDate] = useState('')
  const [transactionWeekday, setTransactionWeekday] = useState('')
  const [transactionDescription, setTransactionDescription] = useState('')
  const [transactionId, setTransactionId] = useState(0)
  // const [categories, setCategories] = useState([
  //   {
  //     id: 1,
  //     name: 'Pix'
  //   },
  //   {
  //     id: 2,
  //     name: 'Lazer'
  //   },
  //   {
  //     id: 3,
  //     name: 'Alimentação'
  //   },
  //   {
  //     id: 4,
  //     name: 'TED'
  //   },
  //   {
  //     id: 5,
  //     name: 'Contas'
  //   },
  //   {
  //     id: 6,
  //     name: 'Depósito'
  //   },
  //   {
  //     id: 7,
  //     name: 'Mercado'
  //   },
  //   {
  //     id: 8,
  //     name: 'Farmácia'
  //   },
  // ])

  function handleTransactionType(type) {
    setTransactionType(type)
  }

  function handleTransactionValue(value) {
    setTransactionValue(value)
  }

  function handleTransactionCategory(category) {
    setTransactionCategory(category)
  }

  function handleTransactionDate(date) {
    setTransactionDate(date)
    const weekday = format(new Date(date), 'eeee');
    setTransactionWeekday(weekday)
  }

  function handleTransactionDescription(description) {
    setTransactionDescription(description)
  }

  function handleEditTransaction() {
    const newTransactions = transactions.map((transaction) => {
      if (transaction.id === transactionId) {
        return {
          id: transactionId,
          date: transactionDate,
          type: transactionType,
          weekday: transactionWeekday,
          description: transactionDescription,
          category: transactionCategory,
          value: transactionType === 'input' ? `R$${transactionValue}` : `R$-${transactionValue}`,
        }
      } else {
        return transaction
      }
    })
    setTransactions(newTransactions)
    setActiveEditTransactionModal(!activeEditTransactionModal)
  }

  return (
    <div className={activeEditTransactionModal ? "modal-edit-transaction" : "modal-edit-transaction hidden"}
    >
      <div className="modal-add-transaction-container">
        <div className="modal-add-transaction-header">
          <h1 className="tittle">Editar Registro</h1>
          <div
            className='btn-close'
            onClick={() => setActiveEditTransactionModal(!activeEditTransactionModal)}
          ></div>
        </div>
        <div className="transaction-type-container">
          <button
            className={transactionType === 'input' ? 'btn-modal-transaction-input btn-input-active' : 'btn-modal-transaction-input btn-inactive'}
            onClick={() => handleTransactionType('input')}
          >Entrada
          </button>
          <button
            className={transactionType === 'output' ? 'btn-modal-transaction-output btn-output-active' : 'btn-modal-transaction-output btn-inactive'}
            onClick={() => handleTransactionType('output')}
          >Saída</button>
        </div>
        <div className="modal-inputs">
          <div className="modal-value">
            <label htmlFor='value' className="modal-value-text input-label">Valor</label>
            <input
              type="number"
              id="value"
              className="modal-value-input"
              onChange={(event) => handleTransactionValue(event.target.value)}
            />
          </div>
          <div className="modal-category">
            <label htmlFor='category' className="modal-category-text input-label">Categoria</label>
            <select
              className="category-select"
              id='category'
              onChange={(event) => handleTransactionCategory(event.target.value)}
              placeholder=''
            >
              <option value="" style={{ display: 'none' }}></option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>

          </div>
          <div className="modal-date">
            <label htmlFor='date' className="modal-date-text input-label">Data</label>
            <input
              className="modal-date-input"
              type="date"
              id='date'
              onChange={(event) => handleTransactionDate(event.target.value)}
            />
          </div>
          <div className="modal-description">
            <label htmlFor="description" className="modal-description-text input-label">Descrição</label>
            <input
              className="modal-description-input"
              type="text"
              maxLength={21}
              id='description'
              onChange={(event) => handleTransactionDescription(event.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="modal-btn-confirm"
            onClick={() => handleEditTransaction()}
          >Confirmar</button>
        </div>
      </div>
    </div>
  )
}
