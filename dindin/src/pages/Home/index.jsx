import './styles.css'

export default function Home() {

  return (
    <div className='home'>
      <header>
        <a className='logo-link' href="#">
          <div className='logo' alt='Logo icon'></div>
        </a>
        <div className='profile'>
          <div className='profile-options'>
            <a className='profile-image-link' href="#">
              <div className='profile-image' alt='Profile picture'></div>
            </a>
            <a className='profile-name-link' href="#">
              <h1 className='profile-name' alt='Profile name'>Daniel</h1>
            </a>
          </div>
          <a className='profile-name-link'
            // go to login page
            href=""
          >
            <div className='sign-out-icon' alt='Logout icon'></div>
          </a>
        </div>
      </header>

      <main>
        <div className='account-details-container'>
          <div className='filter-container' alt='Filter'>
            <div className='filter-icon' alt='Filter icon'></div>
            <div className='filter-text'>Filtrar</div>
          </div>
          <div className='account-summary-transactions'>
            <div className='transactions'></div>
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
          </div>
        </div>
      </main>
    </div>
  )
};
