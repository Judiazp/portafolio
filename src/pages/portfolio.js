import React from 'react';
import projectList  from '../links/projectList'
import Header from '../components/molecules/header'
import Welcome from '../components/organisms/welcome-section'
import Grid from '../components/organisms/grid/'
import ContactList from '../components/organisms/contactList/';
import contactList from '../links/contact-list';
import './portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <Header />
            <Welcome />
            <Grid projectList = { projectList } />
            <ContactList contactList = { contactList } />
        </div>
    )
}

export default Portfolio;