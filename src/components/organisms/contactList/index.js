import React from 'react';
import './contactList.css';
import ProfileLink from '../../molecules/profileLinks/'

const ContactList = (props) => {

    return (
    <section id="contact" class="contact">
        <h1>Trabajemos juntos...</h1>
        <p>¡Crezcamos juntos!</p>
        <div class="social-media__container">
            <ul>
                { props.contactList.map(link => <ProfileLink data = { link } />) }
            </ul>
        </div>
    </section>
    )
}

export default ContactList;