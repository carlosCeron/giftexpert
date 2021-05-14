import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({ setCategorias }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategorias(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={inputValue}
      onChange={handleInputValue}
      />
    </form>
  )
}

CategoryAdd.propTypes = {
  setCategorias: PropTypes.func.isRequired
}

export default CategoryAdd
