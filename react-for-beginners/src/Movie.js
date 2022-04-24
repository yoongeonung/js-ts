import React from 'react';

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

export default Movie;