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
            <div className='summary'></div>
          </div>
        </div>
      </main>
    </div>
  )
};
