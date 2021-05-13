//React
import React from 'react';
import Typed from "react-typed";
//Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
//Components
import Header from '../../molecules/header';
import Slider from '../../organisms/slider';
import WindowModal from '../../molecules/modal/';

const Welcome = (props) => {
  const useStyles = makeStyles((theme) => ({
    girdItem: {
      borderRight: '5px solid #CCCCCC',
      overflow: 'hidden',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
    },
    technologies: {
      color: '#17d0d5',
      fontWeight: 600
    }
  }));

  const classes = useStyles();

  return (
    <div className='blur'>
      <WindowModal/>
      <Header/>
      <CssBaseline/>
      <Grid container>
        <Grid item xs={12} sm={5} className={classes.girdItem}>
          <Slider/>
        </Grid>
        <Grid item xs={12} sm={7} className={classes.girdItem}>
          <Container>
            <Typography variant="h1" align="center" className={classes.title}>
              Juan Carlos Diaz, <br /> Front-end Developer <br /> utilizando&nbsp;
              <Typed 
                className={classes.technologies}
                strings={[
                  'ReactJS',
                  'Material-UI',
                  'JavaScript',
                  'CSS3',
                  'HTML5',
                  'Git'
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

export default Welcome;
 