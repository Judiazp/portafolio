import React from 'react';
import './button.css';

const Button = ({ mensaje }) => {

    return (
        <button className="contact-btn" >
            <div className="contact-btn-overlay"></div>
            <p className="contact-btn-submit">
                { mensaje }
            </p>
        </button>
    )
}

export default Button;