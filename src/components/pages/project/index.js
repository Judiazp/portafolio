import React from 'react';
import Header from '../../molecules/header';
import Grid from '../../organisms/grid';
import Footer from '../../molecules/footer';
import Title from '../../atoms/title';

import './project.css';

const Project = (props) => {
    const title = 'Algunos de mis proyectos';
    return (
        <div>
            <Header />
            <section id="projects" class="projects">
                <Title menssage = { title } />
                <Grid data ={ props } />
            </section>
        </div>
    )
}

export default Project;