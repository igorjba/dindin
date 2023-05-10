import './styles.css'

export default function EditTransactionModal() {

  return (
    <div className="modal-edit-transaction">
      <div className="modal-edit-transaction-container">
        <div className="modal-edit-transaction-header">

          <h1 className="tittle">Adicionar Registro</h1>

          <div className="btn-close"></div>
        </div>
        <div className="transaction-type-container">
          <button className='btn-transaction-input'>Entrada</button>
          <button className='btn-transaction-output'>Saída</button>
        </div>
        <div className="modal-inputs">
          <div className="modal-value">
            <label htmlFor='value' className="modal-value-text input-label">Valor</label>
            <input className="modal-value-input" type="number" id='value' />
          </div>
          <div className="modal-category">
            <label htmlFor='category' className="modal-category-text input-label">Categoria</label>
            <select className="category-select" id='category'>
              <option value="pix">Pix</option>
              <option value="lazer">Lazer</option>
              <option value="alimentação">Alimentação</option>
              <option value="ted">TED</option>
              <option value="contas">Contas</option>
              <option value="deposito">Depósito</option>
              <option value="mercado">Mercado</option>
              <option value="farmacia">Farmácia</option>
            </select>
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
          <button className="modal-btn-confirm">Confirmar</button>
        </div>
      </div>
    </div>
  )
}
