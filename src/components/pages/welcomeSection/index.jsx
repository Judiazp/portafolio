//React
import React from 'react';
import Typed from "react-typed";
//Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withWidth } from '@material-ui/core';
//Components
import Header from '../../molecules/header';
import Slider from '../../organisms/slider';
//resources
import miniatureImage from '../../../resources/multimedia/image-miniature.jpeg'

const Welcome = (props) => {
  const useStyles = makeStyles((theme) => ({
    girdItem: {
      borderRight: '5px solid #CCCCCC',
      overflow: 'hidden',
      height: ( props.width === 'xs' ) ? '50vh' : '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#E0E0E0'
    },
    welcome: {
      color: "#fff",
      padding: '50px',
      borderRadius: '15px',
      background: 'rgba(0, 0, 0, 0.4)',
    },
    title: {
      fontWeight: 400,
      fontSize: ( props.width === 'xs' ) ? '3rem' : '4.5rem',
    },
    technologies: {
      color: '#17d0d5',
      fontWeight: 600
    },
    presentationImage: {
      display: 'none'
    }
  }));

  const classes = useStyles();

  return (
    <div className='blur'>
      <img src={miniatureImage} className={classes.presentationImage} alt="miniature home"/>
      <Header/>
      <CssBaseline/>
      <Grid container>
        <Grid item xs={12} sm={5} className={classes.girdItem}>
          <Slider/>
        </Grid>
        <Grid item xs={12} sm={7} className={classes.girdItem}>
          <Container maxWidth="md">
            <Typography variant="h1" align="center" className={classes.title}>
              Juan Carlos Diaz, <br/> Front-end Developer <br/> con{' '}
              <Typed 
                className={classes.technologies}
                strings={[
                  'React.JS',
                  'Material-UI',
                  'JavaScript',
                  'CSS3',
                  'HTML5',
                  'Linux',
                  'Git',
                  'Scrum'
                ]} 
                typeSpeed={75}
                backSpeed={75}
                startDelay={930}
                backDelay={700}
                loop
              />
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default withWidth()(Welcome);
 