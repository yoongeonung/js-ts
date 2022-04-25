import React from 'react';
import PropTypes from "prop-types";

const Movie = ({coverImg, title, genres, summary}) => {
  return (

       <div key={title}>
           <h2>{title}</h2>
           <img src={coverImg} alt={title}/>
           <ul>
               {genres.map(genre => <li key={genre}>{genre}</li>)}
           </ul>
           <p>{summary}</p>
       </div>
  );
}

Movie.propTypes = {
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired
}

export default Movie;