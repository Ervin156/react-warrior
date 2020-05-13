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

    this.state = {
      show: false
    };

    console.log(this.state);
  }
  render() {
    return (
      <div className="MovieItem">
        <p>{this.title}</p>
        <p>{this.vote_average}</p>
        <MovieImage src={this.image} alt={this.title} />
        <button
          type="button"
          onClick={() => {
            this.state.show === false
              ? this.setState({ show: true })
              : this.setState({ show: false });
          }}
        >
          show overview
        </button>

        {this.state.show === true ? <p>{this.overview}</p> : null}
      </div>
    );
  }
}

export default MovieItem;
