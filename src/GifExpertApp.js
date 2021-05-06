import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const GifExpertApp = props => {

  // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball Z'];

  const [categorias, setCategorias] = useState(['One Punch', 'Samurai X', 'Dragon Ball Z']);

  const handleAdd = () => {
    setCategorias([...categorias, 'Naruto']);
  }

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <hr/>
      {categorias.map(categoria => <li key={categoria}>{categoria}</li>)}
      <button onClick={handleAdd}>Agregar elemento</button>
    </Fragment>
  )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
