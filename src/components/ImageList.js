import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = ({images, onImageSelect}) => {
  const renderedImages = images.map((image) => {
    return <ImageCard onImageSelect={onImageSelect} key={image.id} image={image}/>;
  });
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;


