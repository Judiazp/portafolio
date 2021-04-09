import React from 'react';
import Header from '../../molecules/header';
import ContactCard from '../../organisms/contactCard'
import './contact.css';

const ContactList = () => {

    return (
        <div>
            <Header />
            <section id="contact" className="section-contact">
                <ContactCard />
            </section>
        </div>
    )
}

export default ContactList;