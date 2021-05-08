import React, { Fragment, useState } from 'react'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

  const [categorias, setCategorias] = useState(['One Punch']);

  const handleAdd = () => {
    setCategorias([...categorias, 'Naruto']);
  }

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <CategoryAdd  setCategorias={setCategorias} />
      <hr/>
      {categorias.map(categoria => <GifGrid key={categoria} category={categoria} />)}
      <button onClick={handleAdd}>Agregar elemento</button>
    </Fragment>
  )
}

export default GifExpertApp
