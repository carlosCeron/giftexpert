import React, { Fragment, useState } from 'react'
import CategoryAdd from './components/CategoryAdd';

const GifExpertApp = props => {

  // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball Z'];

  const [categorias, setCategorias] = useState(['One Punch', 'Samurai X', 'Dragon Ball Z']);

  const handleAdd = () => {
    setCategorias([...categorias, 'Naruto']);
  }

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <CategoryAdd  setCategorias={setCategorias} />
      <hr/>
      {categorias.map(categoria => <li key={categoria}>{categoria}</li>)}
      <button onClick={handleAdd}>Agregar elemento</button>
    </Fragment>
  )
}

export default GifExpertApp
