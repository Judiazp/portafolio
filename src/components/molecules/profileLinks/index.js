import React from 'react';
import './profileLinks.css';

const ProfileLink = (props) => {

    const { img, link, text, alt } = props.data;

    return (
        <li>
            <img class="logo" src={ img } alt={ alt } />
            <a href={ link } target="_blank" id="profile-link" class="profile-link">
            { text }
            </a>
        </li>
    )
}

export default ProfileLink;