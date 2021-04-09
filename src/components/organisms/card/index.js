import React from 'react';
import ProjectDescription from '../../molecules/projectDescription'
import './card.css'

const Card = (props) => {

    const { link, img, title, text, color, textBtn } = props.data

    return (
      <div class="project-container" target="_blank" href={ link } >
        <div className="container-image">
          <img class="project-image" src={ img } />
        </div>
        <ProjectDescription />
      </div>
    )
}

export default Card;