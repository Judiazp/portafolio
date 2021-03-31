import React from 'react';
import './project.css'

const Card = (props) => {

  const { link, img, text } = props.data

    return (
        <a class="project-container" title="Ver más" target="_blank" href={ link } >
          <img class="project-image" src={ img } />
          <p class="project-title"> { text } </p>
        </a>
    )
}

export default Card;