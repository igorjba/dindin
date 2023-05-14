import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import api from '../../../services/api';
import { getItem } from '../../../utils/storage';
import './styles.css';

export default function AddTransactionModal({ allCategories, updateTransactions, activeAddTransactionModal, setActiveAddTransactionModal }) {
  const [record, setRecord] = useState({ value: '', category: '', date: '', description: '', type: 'entrada' });
  const [error, setError] = useState('');

  function handleInput(event) {
    return setRecord({ ...record, [event.target.name]: event.target.value });
  }

  function handleClick(event) {
    return setRecord({ ...record, type: event.target.name });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!record.value) return setError('Insira o valor');
    if (!record.category) return setError('Insira a categoria');
    if (!record.date) return setError('Insira uma data');
    if (!record.description) return setError('Insira uma descrição');

    postTransaction();
    setActiveAddTransactionModal(!activeAddTransactionModal)
    return updateTransactions();
  }

  async function postTransaction() {
    const { value, category, date, description, type } = record;
    const formattedValue = value * 100;
    const dateArray = date.split('-');
    const timestamp = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    const data = {
      tipo: type,
      descricao: description,
      valor: formattedValue,
      data: timestamp,
      categoria_id: +category
    };
    const token = getItem('token');
    let response;
    try {
      response = await api.post('/transacao', data, { headers: { Authorization: `Bearer ${token}` } });
    } catch (error) {
      window.alert(error.response.data.mensagem);
    }

    return updateTransactions();
  }

  return (
    <div className={activeAddTransactionModal ? "modal-add-transaction" : "modal-add-transaction hidden"}
    >
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
            className={`btn-modal-transaction-input ${record.type === 'entrada' ? ' btn-input-active' : 'btn-inactive'}`}
            onClick={handleClick}
            name='entrada'
          >Entrada
          </button>
          <button
            className={`btn-modal-transaction-output ${record.type === 'saida' ? ' btn-output-active' : 'btn-inactive'}`}
            onClick={handleClick}
            name='saida'
          >Saída</button>
        </div>
        <div className="modal-inputs">
          <div className="modal-value">
            <label htmlFor='value' className="modal-value-text input-label">Valor</label>
            <NumericFormat
              value={record.value}
              displayType="input"
              thousandSeparator="."
              decimalSeparator=","
              allowNegative={false}
              onValueChange={(values) => setRecord({ ...record, value: values.floatValue })}
              className="modal-value-input"
              name='value'
              prefix="R$ "
              placeholder='R$ 0,00'
            />
          </div>
          <div className="modal-category">
            <label htmlFor='category' className="modal-category-text input-label">Categoria</label>
            <select
              className="category-select"
              id='category'
              onChange={handleInput}
              placeholder=''
              name='category'
            >
              <option key={0} value=''></option>
              {allCategories.map(category =>
                <option key={category.id} value={category.id}>{category.descricao}</option>
              )}
            </select>

          </div>
          <div className="modal-date">
            <label htmlFor='date' className="modal-date-text input-label">Data</label>
            <input
              className="modal-date-input"
              type="date"
              id='date'
              onChange={handleInput}
              name='date'
            />
          </div>
          <div className="modal-description">
            <label htmlFor="description" className="modal-description-text input-label">Descrição</label>
            <input
              className="modal-description-input"
              type="text"
              maxLength={21}
              id='description'
              onChange={handleInput}
              name='description'
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="modal-btn-confirm"
            onClick={handleSubmit}
          >Confirmar</button>
        </div>
      </div>
    </div>
  )
}
