import React from "react";
import Header from '../../molecules/header';

const Contact = () => {
    const style = {
        padding: '20px',
        color: 'black'
    }
    return (
        <div>
            <Header/>
            <h1 style={style}>Seccion de contacto</h1>
        </div>
    )
}

export default Contact;