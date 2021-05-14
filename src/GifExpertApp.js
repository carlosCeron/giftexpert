import React, { Fragment, useState } from 'react'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({categoriesDef = []}) => {

  const [categorias, setCategorias] = useState(categoriesDef);

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <CategoryAdd  setCategorias={setCategorias} />
      <hr/>
      {categorias.map(categoria => <GifGrid key={categoria} category={categoria} />)}
    </Fragment>
  )
}

export default GifExpertApp
