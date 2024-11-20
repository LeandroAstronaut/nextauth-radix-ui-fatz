import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value); // Llama a la función pasada desde el componente padre
  };

  return (
    <form className="d-flex flex-wrap align-items-center my-2">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
        onChange={handleChange} 
      />
    </form>
  );
};

export default SearchBox;
