import React from "react";
import MovieImage from "./MovieImage";
import "./MovieItem.css";

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.movie.title;
    this.vote_average = props.movie.vote_average;
    this.image = props.movie.image;
    this.overview = props.movie.overview;
    console.log(props);
  }
  render() {
    return (
      <div className="MovieItem">
        <p>{this.title}</p>
        <p>{this.vote_average}</p>
        <MovieImage src={this.image} alt={this.title} />
        <p>{this.overview}</p>
      </div>
    );
  }
}

// function MovieItem({ movie: { title, vote_average, image, overview } }) {
//   return (
//     <div className="MovieItem">
//       <p>{title}</p>
//       <p>{vote_average}</p>
//       <MovieImage src={image} alt={title} />
//       <p>{overview}</p>
//     </div>
//   );
// }
export default MovieItem;
