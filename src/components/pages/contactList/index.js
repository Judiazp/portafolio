import React from 'react';
import './contactList.css';
import Header from '../../molecules/header/'
import Footer from '../../molecules/footer/'

const ContactList = () => {

    return (
        <div>
            <Header />
            <section id="contact" className="section-contact">
                <div className="contact-container">
                    <div className="contact-about">
                        <div className="contact-presentation">
                            <h1 className="contact-presentation-title">¡Trabajemos juntos!</h1>
                            <h3 className="contact-presentation-subtitle">¡Crezcamos juntos!</h3>
                            <p className="contact-presentation-description">
                                Creyente y fanático del aprendizaje autodidacta e ininterrumpido,
                                con alto interés de crecer profesionalmente en el mundo de la tecnología,
                                desarrollando soluciones efectivas y escalables.
                                Herramientas de desarrollo HTML5, CSS3, JavaScript, git,
                                Responsive Design, componentes ReactJS, entre otros.
                            </p>
                        </div>
                    </div>
                    <div className="section-form">
                        <form className="contact-form">
                            <h1 className="contact-form-title">Contactame</h1>
                            <input className="contact-inpt" id="name" type="text" placeholder="Nombre" />
                            <input className="contact-inpt" id="email" type="email" placeholder="Email" />
                            {/* <input className="contact-inpt" id="title" type="text" placeholder="Titulo" /> */}
                            <textarea className="contact-mssg" id="message" placeholder="Mensaje" />
                            <button className="contact-btn" >
                                <div className="contact-btn-overlay"></div>
                                <p className="contact-btn-submit">
                                    Enviar mensaje
                                </p>
                            </button>
                        </form>
                    </div>
                </div>
                {/* <div className="contact-footer">
                    <Footer />
                </div> */}
            </section>
        </div>
    )
}

export default ContactList;