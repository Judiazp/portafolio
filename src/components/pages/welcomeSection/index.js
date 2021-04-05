import React from 'react';
import Header from '../../molecules/header/'
import './welcome.css';

const Welcome = () => {

    return (
        <>
            <Header />
            <section id="welcome-section" class="welcome-section welcome-content">
                <div class="welcome-description typewriter">
                    <h1> ¡Hey! mi nombre es Juan Carlos y soy Frontend Developer.<span className="flicker" >|</span> </h1>
                </div>
            </section>
        </>
    )
}

export default Welcome;
