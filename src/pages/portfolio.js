import React from 'react';
import projectList  from '../links/projectList'
import Header from '../components/molecules/header'
import Welcome from '../components/organisms/welcome-section'
import Grid from '../components/organisms/grid/'


const Portfolio = () => {
    return (
        <div>
            <Header />
            <Welcome />
            <Grid projectList = { projectList } />
        </div>
    )
}

export default Portfolio;