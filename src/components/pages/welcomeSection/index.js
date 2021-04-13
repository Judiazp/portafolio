import Title from '../../atoms/title';
import React from 'react';
import Header from '../../molecules/header/';
import './welcome.css';

const Welcome = () => {

    const welcome = '¡Hey! mi nombre es Juan Carlos y soy Frontend Developer.';

    return (
        <>
             <Header />
            <section id="welcome-section" class="welcome-section welcome-content">
                <div class="welcome-description typewriter">
                    <Title menssage = { welcome } />
                    {/* <h1> ¡Hey! mi nombre es Juan Carlos y soy Frontend Developer.<span className="flicker" >|</span> </h1> */}
                </div>
            </section>
        </>
    )
}

export default Welcome;
