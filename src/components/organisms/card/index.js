import React from 'react';
import ProjectDescription from '../../molecules/projectDescription';
import ProjectImage from '../../molecules/projectImage'
import './card.css'

const Card = (props) => {
  const { title, text, img, isPublic, linkPage, linkCode } = props.data;
    return (
      <div class="project-container" >
        <ProjectImage  url = { img } />
        <ProjectDescription
        linkPage = { linkPage }
        title = { title }
        isPublic = { isPublic }
        text = { text }
        linkCode = { linkCode } />
      </div>
    )
}

export default Card;