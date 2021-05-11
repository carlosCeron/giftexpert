import React from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const {data, loading} = useFetchGifs(category);

  return (
    <div>
      {loading && <h4>Loading...</h4>}
      <ol className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id}  {...img} />
        ))}
      </ol>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;
