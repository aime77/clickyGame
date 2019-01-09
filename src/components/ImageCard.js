import React from "react";

class ImageCard extends React.Component {
  constructor({props, onImageSelect, image, count}) {
    super(props);
    this.state={spans:0};
    this.imageRef = React.createRef();
    this.state={}
    this.imgSelect=()=>{
      onImageSelect(image, count=0);
    }
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
   const height=this.imageRef.current.clientHeight;
   const spans=Math.ceil(height/10);
   this.setState({spans:spans});
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img onClick={this.imgSelect} ref={this.imageRef} alt={description} src={urls.regular} />
        
      </div>
    );
  }
}
export default ImageCard;
