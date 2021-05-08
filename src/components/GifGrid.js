import React from 'react'
import PropTypes from 'prop-types'

const GifGrid = ({category}) => {

  const search = 'naruto';
  const apiKey = 'qNl9pBFbmmnY9rKjK8p30Zh5aCMqJP3C';
  const limit = 10

  const getGifs = async() => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=${limit}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    });

    console.log(gifs);
  }

  getGifs();

  return (
    <div>
      <h2>{category}</h2>
    </div>
  )
}

GifGrid.propTypes = {

}

export default GifGrid
