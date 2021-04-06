import React from 'react';
import './card.css'

const Card = (props) => {

  const { link, img, title, text, color, textBtn } = props.data

    return (
      <a class="project-container" target="_blank" style={ color } href={ link } >
        <img class="project-image" src={ img } />
        <div className="project-overlay" >
          <h1 className="project-title"> { title } </h1>
          <p class="project-description"> { text } </p>
          <button className="project-btn"> { textBtn } </button>
        </div>
      </a>
    )
}

export default Card;