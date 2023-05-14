import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import api from '../../../services/api';
import { getItem } from '../../../utils/storage';
import './styles.css';

export default function EditTransactionModal({ transactionId, updateTransactions, allCategories, activeEditTransactionModal, setActiveEditTransactionModal }) {
  const [record, setRecord] = useState({ value: 0, category: '', date: '', description: '', type: '' });
  const [error, setError] = useState('');

  const valueRef = useRef(null);
  const categoryRef = useRef(null);
  const dateRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    setRecord({ ...record, type: transactionId.type });
    const formattedDate = format(new Date(transactionId.date), 'yyyy-MM-dd');
    valueRef.current.value = transactionId.value / 100;
    categoryRef.current.value = transactionId.categoryid;
    dateRef.current.value = formattedDate;
    descriptionRef.current.value = transactionId.description;
  }, []);


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

    updateTransaction(transactionId);
    setActiveEditTransactionModal(!activeEditTransactionModal)
    return updateTransactions();
  }

  async function updateTransaction(id) {
    const { value, category, date, description, type } = record;
    const formattedValue = +value.replace(',', '.') * 100;
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
      response = await api.put(`/transacao/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
    } catch (error) {
      window.alert(error.response.data.mensagem);
    }
    return updateTransactions();
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
            <input
              type="number"
              id="value"
              className="modal-value-input"
              onChange={handleInput}
              name='value'
              ref={valueRef}
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
              ref={categoryRef}
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
              ref={dateRef}
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
              ref={descriptionRef}
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
