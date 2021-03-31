import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
        <nav id="navbar">
          <ul>
            <li>
              <a class="header-a" href="#welcome-section">Acerca de mi</a>
            </li>
            <li>
              <a class="header-a" href="#projects">Mi trabajo</a>
            </li>
            <li>
              <a class="header-a" href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;