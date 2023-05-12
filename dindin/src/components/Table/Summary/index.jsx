import './styles.css'

export default function Summary({ summaryRef }) {

  return (
    <aside className='sidebar'>

      <div className='summary'>
        <h1 className='summary-tittle'>Resumo</h1>
        <div className='inflows-container'>
          <h3 className='inflows'>Entradas</h3>
          <h3 className='inflows-value'>R$ {summaryRef.current.inflows.toFixed(2)}</h3>
        </div>

        <div className='outflows-container'>
          <h3 className='outflows'>Saídas</h3>
          <h3 className='outflows-value'>R$ {summaryRef.current.outflows.toFixed(2)}</h3>
        </div>

        <div className='balance-container'>
          <h3 className='balance'>Saldo</h3>
          <h3 className='balance-value'
            style={summaryRef.current.balance >= 0 ? { color: `#3A9FF1` } : { color: 'red' }}>
            R$ {summaryRef.current.balance.toFixed(2)}
          </h3>
        </div>
      </div>
      <button
        className='btn-add-record'
      >
        Adicionar Registro
      </button>
    </aside>
  )
}
