import './styles.css'

export default function Summary() {

  return (
    <div className='sidebar'>
    
      <div className='summary'>
        <h1 className='summary-tittle'>Resumo</h1>
        <div className='inflows-container'>
          <h3 className='inflows'>Entradas</h3>
          <h3 className='inflows-value'>R$200,00</h3>
        </div>
        <div className='outflows-container'>
          <h3 className='outflows'>Saídas</h3>
          <h3 className='outflows-value'>R$70,00</h3>
        </div>
        <div className='balance-container'>
          <h3 className='balance'>Saldo</h3>
          <h3 className='balance-value'>R$129,50</h3>
        </div>
      </div>
      <button className='btn-add-record'>Adicionar Registro</button>
  </div>
  )
};
