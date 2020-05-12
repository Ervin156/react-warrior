import React from 'react';

function MovieImage({src, alt}){
  const styles = {
    img: {
      width: "80%",
      height: "auto"
    }
  };
  return(
    <div className='movie-image'>
      <img src={src} alt={alt} style={styles.img}/>
    </div>
  )
}
export default MovieImage;