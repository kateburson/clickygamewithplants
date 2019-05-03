import React from "react";

function Gallery(props) {
  return(
    <div className="content">
      <img 
      src={props.src}
      key={props.id}
      clicked={props.clicked}
      alt={props.alt}
      onClick={props.onClick}
      ></img>
    </div>
  )
}

export default Gallery;