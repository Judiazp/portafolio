import React from 'react';
import Subtitle from '../../atoms/subtitle';
import Paragraph from '../../atoms/paragraph';
import Button from '../../atoms/button'
import './projectDescription.css'

const ProjectDescription = () => {

    return (
        <div className="Molecule">
          <Subtitle />
          <Paragraph />
          <div className="content-button">
            <Button mensaje='Ver proyecto' />
            <Button mensaje='Ver codigo' />
          </div>
        </div>
    )
}

export default ProjectDescription;