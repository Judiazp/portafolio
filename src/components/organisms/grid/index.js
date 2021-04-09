import React from 'react';
import Card from '../../organisms/card'
import './grid.css'

const Grid = ( props ) => {
    const { projectList } = props.data
    return (
        <div className="project-grid">
            { projectList.map( project => <Card data = { project } />) }
        </div>
    )
}

export default Grid;