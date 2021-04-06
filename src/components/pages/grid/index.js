import React from 'react';
import Card from '../../organisms/card'
import Header from '../../molecules/header/';
import './grid.css';

const Grid = (props) => {

    return (
        <div>
            <Header />
            <section id="projects" class="projects">
                <h1 className="title">Algunos de mis proyectos...</h1>
                <div className="project-grid">
                    { props.projectList.map( project => <Card data = { project } />) }
                </div>
            </section>
        </div>
    )
}

export default Grid;