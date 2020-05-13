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
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({ show: !this.state.show });
  };
  handleLike = () => {
    this.setState({ like: !this.state.like });
  };
  render() {
    const styles = {
      buttonContainer: {
        display: "flex",
        justifyContent: "space-between"
      }
    };
    return (
      <div className="MovieItem">
        <p>{this.title}</p>
        <p>{this.vote_average}</p>
        <MovieImage src={this.image} alt={this.title} />
        <div style={styles.buttonContainer}>
          <button
            type="button"
            onClick={this.toggleOverview}
            className={this.state.show ? "btn-overview" : ""}
            // style={{ background: this.state.show ? "#2cbacb" : "white" }}
          >
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn-like" : ""}
            // style={{ background: this.state.like ? "#2cbacb" : "white" }}
          >
            like
          </button>
        </div>
        {this.state.show === true ? (
          <p style={{ background: "#e8e8e8" }}>{this.overview}</p>
        ) : null}
      </div>
    );
  }
}

export default MovieItem;
