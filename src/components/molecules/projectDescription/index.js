import React from 'react';
import Subtitle from '../../atoms/subtitle';
import Paragraph from '../../atoms/paragraph';
import Button from '../../atoms/button';
import './projectDescription.css';

const ProjectDescription = (props) => {

  const { title, text, isPublic, linkPage, linkCode } = props;
  const viewCode = 'Ver codigo';
  const viewProject = 'Ver proyecto';

  if (isPublic) {
    return (
        <div className="description-container">
          <Subtitle subTitle = { title }/>
          <Paragraph description = { text } />
          <div className="content-button">
            <Button message={ viewProject } url={ linkPage } />
            <Button message={ viewCode } url={ linkCode } />
          </div>
        </div>
    )
  } if (title === 'Mi portafolio') {
    return (
      <div className="description-container">
          <Subtitle subTitle = { title }/>
          <Paragraph description = { text } />
          <div className="content-button">
            <Button message={ viewCode } url={ linkCode }/>
          </div>
        </div>
    )
  } else {
    return (
      <div className="description-container">
        <Subtitle subTitle = { title }/>
        <Paragraph description = { text } />
        <div className="content-button">
          <Button message={ viewProject } url={ linkPage }/>
        </div>
      </div>
    )
  }
}

export default ProjectDescription;