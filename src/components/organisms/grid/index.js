import React from 'react';
import Card from '../card'
import './projects.css';

const Grid = (props) => {

    return (
        <section id="projects" class="projects">
            <h1>Algunos de mis proyectos...</h1>
            <div className="project-grid">
                { props.projectList.map( project => <Card data = { project } />) }
            </div>
        </section>
    )
}

export default Grid;