import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const search = "naruto";
  const apiKey = "qNl9pBFbmmnY9rKjK8p30Zh5aCMqJP3C";
  const limit = 10;

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=${limit}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  return (
    <div>
      <ol className="card-grid">
        {images.map((img) => (
          <GifGridItem {...img} />
        ))}
      </ol>
    </div>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
