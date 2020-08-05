import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import SearchField from "./components/SearchField";
import InfoSection from "./components/InfoSection";

export class App extends Component {
  state = {
    movieName: "",
    movieYear: "",
    moviePlot: "",
    title: "",
    year: "",
    plot: "",
    genre: "",
    actors: "",
    isClicked: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://www.omdbapi.com/?t=${this.state.movieName}&y=${this.state.movieYear}&plot=${this.state.moviePlot}&apikey=6950a7b9`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          title: data.Title,
          year: data.Year,
          plot: data.Plot,
          genre: data.Genre,
          actors: data.Actors,
        });
      });
  };

  handleMovieName = (e) => {
    this.setState({ movieName: e.target.value });
  };

  handleYear = (e) => {
    this.setState({ movieYear: e.target.value });
  };

  handlePlot = (e) => {
    this.setState({ moviePlot: e.target.value });
  };

  handleClick = () => {
    this.setState({ isClicked: true });
  };

  handleReset = () => {
    this.setState({
      movieName: "",
      movieYear: "",
      moviePlot: "",
      title: "",
      year: "",
      plot: "",
      genre: "",
      actors: "",
      isClicked: false,
    });
    document.getElementById("searchForm").reset();
  };

  render() {
    return (
      <div>
        <Nav />
        <SearchField
          handleSubmit={this.handleSubmit}
          handleMovieName={this.handleMovieName}
          handleYear={this.handleYear}
          handlePlot={this.handlePlot}
          handleClick={this.handleClick}
          handleReset={this.handleReset}
        />
        {this.state.isClicked === true ? (
          <InfoSection
            title={this.state.title}
            year={this.state.year}
            plot={this.state.plot}
            genre={this.state.genre}
            actors={this.state.actors}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
