//React Components
import React from "react";
import Header from '../../molecules/header';
//Material-UI
import {
  makeStyles,
  CssBaseline,
  Grid,
  Typography
} from "@material-ui/core";
// Resources
import imageError from '../../../resources/multimedia/error.png';

const PageNotFound = () => {

  const useStyles = makeStyles(theme => ({
    content: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor: '#EBEBEB',
    },
    img: {
      borderRadius: 20
    },
    error: {
      height: '256px'
    },
    footer: {
      position: 'fixed',
      bottom: '0',
      width: '100%'
    }
  }))
  
  const classes = useStyles();

  return (
    <div className="blur"> 
      <CssBaseline/>
      <Header/>
      <Grid xs={12} className={classes.content} direction="column">
        <Typography variant="h2" color="textSecondary" align="center" gutterBottom>
          ¡Oops! Algo no anda bien
        </Typography>
        <img src={imageError} alt="error 404" />
        <Typography variant="h3" color="textSecondary" align="center">
          Pagina no encontrada
        </Typography>
      </Grid>
    </div>
  );
};

export default PageNotFound;