import React from 'react';
import ProfileLink from '../../molecules/profileLinks/';
import contactList from '../../../data/contactList';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                { contactList.map(link => <ProfileLink data = { link } />) }
            </ul>
        </footer>
    )
}

export default Footer;