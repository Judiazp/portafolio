import React from 'react';
import './header.css';

const Header = () => {

  return (
    <header>
      <nav id="navbar">
        <ul>
          <li>
            <a class="header-a" href="http://localhost:3000/" >Acerca de mi</a>
          </li>
          <li>
            <a class="header-a" href="http://localhost:3000/projects">Portafolio</a>
          </li>
          <li>
            <a class="header-a" href="http://localhost:3000/contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;