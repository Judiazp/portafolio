import React from 'react';
import Header from '../../molecules/header';
import Grid from '../../organisms/grid';
import Footer from '../../molecules/footer';
import Title from '../../atoms/title';

import './project.css';

const Project = (props) => {

    return (
        <div>
            <Header />
            <section id="projects" class="projects">
                <Title />
                <Grid data ={ props } />
            </section>
            {/* <Footer /> */}
        </div>
    )
}

export default Project;