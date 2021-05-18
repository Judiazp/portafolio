import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './header.css';

const Header = () => {

  const [open, setOpen] = useState(false);

  const openMenu = () => {
   setOpen(!open);
  }

  const navbar = [
    {
      title: 'Inicio',
      url: 'http://localhost:3000/'
    },
    {
      title: 'Portafolio',
      url: 'http://localhost:3000/projects'
    },
    {
      title: 'Contacto',
      url: 'http://localhost:3000/contact'
    }
  ]

  const useStyles = makeStyles((theme) => ({
    navbar: {
      display: 'flex',
      justifyContent:' flex-end',
      width: '100%',
      top: '0',
      position: 'fixed',
      zIndex: '500',
    },
    list: {
      display: 'flex',
      listStyle: 'none',
      margin: '20px',
      padding: 0,
      borderRadius: '10px',
      position: 'fixed',
    },
    openMenu: {
      transform: 'translate(600px)',
    },
    listItem: {
      margin: 0,
      padding: 0,
      cursor: 'pointer',
      backgroundColor:'#222',
      transition: 'all 0.4s ease 0s',
    },
  }))

  const classes = useStyles();

  return (
    <header>
      <nav className={classes.navbar} >
        <ul className={classes.list}>
          { navbar.map((items)=> (
            <li className={ (open) ? classes.listItem : classes.openMenu }>
              <a className="header-a" href={items.url} >{items.title}</a>
            </li>
          ))}
          <li className={classes.listItem}>
            <a className="header-a change" onClick={() => openMenu()}> 
              <span className="line first-line"></span>
              <span className="line second-line"></span>
            </a>   
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;