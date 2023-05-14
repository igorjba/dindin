import { useState } from 'react';
import './styles.css';

export default function Filter({ setActiveFilters, filterStart, categories }) {

  const filterButtonsStart = {};
  categories.forEach(category => filterButtonsStart[category] = false);

  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(filterButtonsStart);

  function spawnFilterCategory(category, index) {
    return <div
      key={`filter${index}`}
      className={`category round ${selectedFilters[category] ? "selected" : ""}`}
      onClick={clickFilterCategory}
    >
      {category}<div>+</div>
    </div>;
  }

  function clickFilterCategory(event) {
    const option = event.target.firstChild.data;
    const localSelectedFilters = { ...selectedFilters, [option]: !selectedFilters[option] };
    return setSelectedFilters(localSelectedFilters);
  }

  function clearFilters() {
    setSelectedFilters(filterButtonsStart);
    return setActiveFilters(filterStart);
  }

  return (
    <div className='filter-container'>
      <div className='filter-btn round' alt='Filter' onClick={() => setShowFilter(!showFilter)}>
        <div className='filter-icon' alt='Filter icon' /> Filtrar
      </div>
      {showFilter &&
        <div className='categories-container round'>
          <div className='categories-title'>Categoria</div>
          <div className='categories-options'>
            {categories.map((category, index) => spawnFilterCategory(category, index))}
          </div>
          <div className='categories-btns'>
            <button className='round clear' onClick={clearFilters}>Limpar Filtros</button>
            <button className='round apply first' onClick={() => setActiveFilters(selectedFilters)}>Aplicar Filtros</button>
          </div>
        </div>
      }
    </div>
  )
};
