import React from "react";
import unsplash from "../apis/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Header from "./Header";

class App extends React.Component {
  state = {
    images: [],
    selectedImage: null,
    counter: 0,
    highestCount: 0,
    feedbackText: "Search for an image theme to begin",
    selectedImageArray: []
  };

  onSearchSubmit = async term => {
    console.log(term);
    const response = await unsplash.get("search/photos", {
      params: { query: term },
      maxContentLength:10
    });
    this.setState({ images: response.data.results });
    this.resetGame();
    this.setState({ feedbackText: "Now CLICK on an image to begin exercising your memory. Good luck!" });
  };

  onImageSelect = image => {
    this.setState({ selectedImage: image });

    this.state.images.sort(() => Math.random() - 0.5);

    if (this.state.selectedImageArray.length < 1) {
      this.setState({ counter: this.state.counter + 1 });
      this.highestScore();
      this.setState({ feedbackText: "One point up, awesome job!" });
    } else {
      this.state.selectedImageArray.forEach(img => {
        if (image.id !== img) {
          this.setState({ feedbackText: "One point up, awesome job!" });
          this.setState({ counter: this.state.counter + 1 });
          this.highestScore();
          this.winGame();
        } else if (image.id === img) {
          this.setState({ feedbackText: "Close, keep trying!" });
          this.resetGame();
        }
      });
    }
    this.setState({ selectedImageArray: [image.id] });
  };

  winGame = () => {
    if (this.state.counter === this.state.images.length) {
      this.setState({
        feedbackText: "Congratulations! You won! Challenge yourslef by trying a different image theme."
      });
      this.setState({ highestCount: 0 });
      this.resetGame();
      return true;
    }
  };

  highestScore = () => {
    if (this.state.counter === this.state.highestCount) {
      this.setState({ highestCount: this.state.highestCount + 1 });
    }
  };

  resetGame = () => {
    this.setState({ selectedImageArray: [] });
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Header
          counter={this.state.counter}
          image={this.state.selectedImage}
          higuestCount={this.state.highestCount}
          feedbackText={this.state.feedbackText}
        />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList
          onImageSelect={this.onImageSelect}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;
