import React from 'react';
import AboutMe from '../../molecules/aboutMe'
import Form from '../../molecules/form';
import './contactCard.css';

const ContactCard = () => {
    return (
        <div className="contact-container">
            <AboutMe />
            <Form />
        </div>
    )
}

export default ContactCard;