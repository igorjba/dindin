import './styles.css'

export default function Filter() {

  const showCategories = true;
  const categories = ['contas', 'depósito', 'teste', 'lazer', 'mercado', 'TED', 'compras', 'farmácia', 'PIX']

  function spawnFilterCategory(category) {
    return <div className='category round' key={category}>{category} <div>+</div></div>;
  }

  return (
    <div className='filter-container'>
      <div className='filter-btn round' alt='Filter'>
        <div className='filter-icon' alt='Filter icon'/> Filtrar
      </div>
      {showCategories &&
      <div className='categories-container round'>
        <div className='categories-title'>Categoria</div>
        <div className='categories-options'>
          {categories.map((category) => spawnFilterCategory(category))}
        </div>
        <div className='categories-btns'>
          <button className='round clear'>Limpar Filtros</button>
          <button className='round apply'>Aplicar Filtros</button>
        </div>
      </div>
      }
    </div>
  )
};
