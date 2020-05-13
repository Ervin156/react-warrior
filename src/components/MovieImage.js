import React from 'react';

function MovieImage({src, alt}){
  return(
    <div className='movie-image'>
      <img  width='100%' src={src} alt={alt} />
    </div>
  )
}
export default MovieImage;