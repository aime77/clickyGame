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
    highestCount: 5,
    feedbackText: "",
    selectedImageArray: []
  };

  onSearchSubmit = async term => {
    console.log(term);
    const response = await unsplash.get("search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  onImageSelect = image => {
    this.setState({ selectedImage: image });

    console.log("from app", image);
    
    this.state.images.sort(() => Math.random() - 0.5);
    console.log(image.id);
    if (this.state.selectedImageArray.length < 1) {
      this.setState({ counter: this.state.counter + 1 });
      this.setState({ feedbackText: "One point up, awesome job!" });
    } else {
      this.state.selectedImageArray.forEach(img => {
        console.log(image.id, img);
        if (image.id !== img) {
          console.log(image.id, img.id);
          this.setState({ feedbackText: "One point up, awesome job!" });
          this.setState({ counter: this.state.counter + 1 });
          this.winGame();
        } else if (image.id === img){
          this.setState({ feedbackText: "Close, try again!" });
        }
        });
      };
      this.setState({ selectedImageArray: [image.id] });
    }
  

  winGame = () => {
    if (this.state.counter >= this.state.highestCount) {
      console.log(this.state.counter, this.state.highestCount);
      this.setState({ feedbackText: "You won! Congratulations!" });
      this.setState({ selectedImageArray: [] });
      return true;
    }
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
