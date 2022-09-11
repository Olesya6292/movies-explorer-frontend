import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='form'>
      <form className='form-search'>
        <div className='form-search__inputs'>
          <input
            type='search'
            className='form-search__input'
            name='search'
            placeholder='Фильм'
            required
          />
          <button
            aria-label='Найти фильмы'
            type='submit'
            className='form-search__submit'
          >
            Найти
          </button>
        </div>
        <FilterCheckbox/>
      </form>
    </section>
  );
}

export default SearchForm;
