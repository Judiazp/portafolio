import React from 'react';
import './button.css';

const Button = (props) => {

    const { message, url } = props

    return (
        <a className="contact-btn" target="_blank" href={ url } > { message } </a>
    )
}

export default Button;