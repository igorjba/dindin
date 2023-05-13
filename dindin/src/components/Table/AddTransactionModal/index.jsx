import './styles.css'
import { useState } from 'react';
import api from '../../../services/api';
import { format } from 'date-fns'

export default function AddTransactionModal({ categories, postTransaction, activeAddTransactionModal, setActiveAddTransactionModal, transactions, setTransactions }) {

  //preencher os inputs com os dados da transação selecionada enviar formatados para a api
  const [transactionType, setTransactionType] = useState('input');
  const [transactionValue, setTransactionValue] = useState('');
  const [transactionCategory, setTransactionCategory] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [transactionDescription, setTransactionDescription] = useState('');

  function handleTransactionType(type) {
    setTransactionType(type);
  }

  function handleTransactionValue(value) {
    setTransactionValue(value);
  }

  function handleTransactionCategory(category) {
    setTransactionCategory(category);
  }

  function handleTransactionDate(date) {
    setTransactionDate(date);
  }

  function handleTransactionDescription(description) {
    setTransactionDescription(description);
  }


  async function handleAddTransaction() {
    const token = localStorage.getItem('token');
    const date = format(new Date(transactionDate), 'yyyy-MM-dd');
    const body = {
      valor: transactionValue,
      tipo: transactionType,
      categoria: transactionCategory,
      data: date,
      descricao: transactionDescription
    }
    try {
      const response = await api.post('/transacao', body, { headers: { Authorization: `Bearer ${token}` } });
      const { id, tipo: type, descricao: description, valor: value, data: date, usuario_id: userid, categoria_id: categoryid, categoria_nome: categoryname } = response.data;
      const transaction = { id, type, description, value, date, userid, categoryid, categoryname };
      postTransaction(transaction);
      setActiveAddTransactionModal(!activeAddTransactionModal);
    } catch (error) {
      window.alert(error.response.data.mensagem);
    }
  }



  return (
    <div className={activeAddTransactionModal ? "modal-add-transaction" : "modal-add-transaction hidden"}>
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
            onClick={() => handleAddTransaction()}
          >Confirmar</button>
        </div>
      </div>
    </div>
  )
}
