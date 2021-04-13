import React from 'react';
import Title from '../../atoms/title';
import Subtitle from '../../atoms/subtitle';
import Paragraph from '../../atoms/paragraph';
import './aboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <Title menssage='Acerca de mi' />
            <Subtitle />
            <Paragraph />
        </div>
    )
}

export default AboutMe;