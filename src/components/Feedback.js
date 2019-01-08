import React from "react";

const Feedback=({image, counter})=>{
let imageArray=[];

if(!image){
   return <div> Click an image to begin!</div>;
}
else if (image){
imageArray.push(image.id);

imageArray.forEach((selectedImg)=>{

    if(selectedImg!==image.id){
      
        return <div>You guessed correctly</div>
    }
    if(selectedImg===image.id){
        return <div>Wrong guess. Try again!</div>
    }

})
}

return <div></div>

}

export default Feedback