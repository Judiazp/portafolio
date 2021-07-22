import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';

const Header = () => {

  const [open, setOpen] = useState(false);

  const openMenu = () => {
   setOpen(!open);
  }

  const navbarData = [
    {
      title: 'Inicio',
      url: '/',
      name: 'home',
      id: 1
    },
    {
      title: 'Portafolio',
      url: '/portfolio',
      name: 'portfolio',
      id: 2
    },
    {
      title: 'Contacto',
      url: '/contact',
      name: 'contact',
      id: 3
    }
  ]

  const useStyles = makeStyles((theme) => ({
    navbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      top: '0',
      position: 'fixed',
      zIndex: '500',
      borderRadius: 10,
    },
    list: {
      display: 'flex',
      listStyle: 'none',
      padding: '0 10px 0 0',
      borderRadius: '10px',
      position: 'fixed',
      backgroundColor:'#222',
      transition: 'all 0.4s ease 0s',
      margin: '20px 70px 20px 20px',
    },
    openMenu: {
      transform: 'translate(500px)',
      margin: '20px',
      display: 'flex'
    },
    btn: {
      padding: 20,
      margin: 19,
    }
  }))

  const classes = useStyles();

  return (
    <header>
      <nav className={classes.navbar} >
        <ul className={  (open) ? classes.list : classes.openMenu }>
          { navbarData.map((items)=> (
            <li key={items.id}>
              <a className="header-a" name={ items.name } href={items.url} >{items.title}</a>
            </li>
          ))}
        </ul>
        <div>
          <Button name="menu" color="primary" variant="contained" className={classes.btn} onClick={() => openMenu()}> 
            <MenuIcon/>
          </Button>   
        </div>
      </nav>
    </header>
  )
}

export default Header;