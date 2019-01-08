import React from "react";
import unsplash from "../apis/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Feedback from "./Feedback";
import Header from "./Header";

//e5d71c70ddc4f01872fae30c59223265277eb8f827a18396885a90b593db519d
class App extends React.Component {
  state = {
    images: [],
    selectedImage: null,
    counter: 0,
    highestCount: 5,
    feedbackText: ""
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
    this.winGame();
    this.setState({ counter: this.state.counter + 1 }); 
    
    this.state.images.sort(() => Math.random() - 0.5);
   
  };

  // checkCardDuplicateClick=(image)=>{
  //   const imgArray=this.state.images;

  //   imgArray.forEach((img)=>{
  //   if(image.id!==img){

  //   })
    

  //   }
  // }

  winGame = () => {
    if (this.state.counter > this.state.highestCount) {
      console.log(this.state.counter , this.state.highestCount)
      this.setState({ feedbackText: "You won! Congratulations!" });
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
        {/* <Feedback image={this.state.selectedImage} counter={this.state.counter} /> */}
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
