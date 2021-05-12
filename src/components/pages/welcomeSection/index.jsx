import React, {useState, useEffect} from 'react';
//Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Header from '../../molecules/header';
import Slider from '../../organisms/slider';
import WindowModal from '../../molecules/modal/';
import './welcome.css'


const Welcome = (props) => {

  const useStyles = makeStyles((theme) => ({
    girdItem: {
      // borderRight: '2px solid black',
      overflow: 'hidden',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#E0E0E0'
    },
    welcome: {
      color: "#fff",
      padding: '50px',
      borderRadius: '15px',
      background: 'rgba(0, 0, 0, 0.4)',
    },
  }));

  const classes = useStyles();

  return (
    <div className="blur">
      <WindowModal/>
      <Header/>
      <CssBaseline/>
      <Grid container>
        <Grid item xs={12} sm={5} className={classes.girdItem}>
          <Slider/>
        </Grid>
        <Grid item xs={12} sm={7} className={classes.girdItem}>
          <Container maxWidth="md" className={classes.welcome}>
              <Typography variant="h4" align="center">
                Bienvenido NameUser estoy muy contento de recibir tu visita, mi nombre es Juan Carlos y podrás.
                navegar en mi sitio web utilizando la barra de navegacion que se encuentra en la esquina superior
                derecha, espero disfrutes la estadia.
              </Typography>
            </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default Welcome;
 