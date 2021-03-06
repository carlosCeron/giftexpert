import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id, title, url}) => {
  return (
    <div className="card card-my-style" >
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifGridItem;
