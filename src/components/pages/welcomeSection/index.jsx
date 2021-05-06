import React, {useState, useEffect} from 'react';
import Header from '../../molecules/header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core/';
import video from '../../../data/welcome-video.mp4';
import Loading from '../../molecules/loader/index'
import './welcome.css'


const Welcome = (props) => {

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    container: {
      backgroundImage: `url(../../../../public/multimedia/video.mp4)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: "#fff"
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%',
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    btn: {
      backgroundColor: '#17d0d5',
      padding: '15px',
      width: '15%',
      fontSize:'20px',
      marginTop: "15px",
    },
    video: {
        objectFit: 'cover',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
    }
    }));

    const classes = useStyles();

  return (
    <div className="welcome">
        <Header/>
        <CssBaseline/>
      <Grid container >  
        <video muted autoPlay loop className={classes.video}>
          <source src={video} type="video/mp4" ></source>
        </video>
      </Grid>
    </div>
  )
}

export default Welcome;
 