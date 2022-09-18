import React from 'react';
import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSearchSubmit, setSearch }) {

  const [searchRequest, setSearchRequest] = useState("");
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const searchParams = setSearch();
    setSearchRequest(searchParams.searchRequest);
    setChecked(searchParams.checked);
  }, [setSearch]);

  function handleSearchChange(e) {
    setSearchRequest(e.target.value);
  }
  
  function handleCheckedChange(e) {
    setChecked(e.target.checked);
    if (localStorage.getItem("searchResult")) {
      onSearchSubmit(searchRequest, !checked);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchRequest) {
      setErrorMessage("Нужно ввести ключевое слово");
      return;
    }
    onSearchSubmit(searchRequest, checked);
    setErrorMessage("");
  }


  return (
    <section className='form'>
      <form className='form-search' onSubmit={handleSubmit} noValidate>
        <div className='form-search__inputs'>
          <input
            type='search'
            className='form-search__input'
            name='search'
            value={searchRequest}
            placeholder='Фильм'
            onChange={handleSearchChange} 
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
        <FilterCheckbox checked={checked} onChange={handleCheckedChange}/>
        <span
            className={`form-search__input-error ${
              errorMessage && 'form-search__input-error_active'
            }`}
          >
            {errorMessage}
            </span>
      </form>
    </section>
  );
}

export default SearchForm;
