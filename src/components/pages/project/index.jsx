//React Components
import React from 'react';
import Header from '../../molecules/header';
import ContentGrid from '../../organisms/grid';
import Footer from '../../molecules/footer'
//Material-UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button, withWidth } from '@material-ui/core';
//Resources
import Video from '../../atoms/video/index';
 
const Project = (props) => {

  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundPosition: 'center center',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      zIndex: '2',
      overflowX: 'hidden',
    },
    presentation: {
      color: "#fff",
      zIndex: '3',
      padding: '30px',
      borderRadius: '15px',
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    btn: {
      padding: '15px',
      width: (props.width === 'xl') ? '40%' : '70%',
      fontSize: (props.width === 'xl') ? '20px' : '15px',
      marginTop: "15px",
    },
    contentGrid: {
      backgroundColor: '#E0E0E0',
      borderTop: '5px solid #CCCCCC',
    },
  }));

  const classes = useStyles();

  return (
    <div className="blur">
      <Header/>
      <CssBaseline />
      <div className={classes.container}>
        <Video/>
        <Container maxWidth={ (props.width === 'xl') ? 'md' : 'sm'} className={classes.presentation}>
          <Typography variant={ (props.width === 'xl') ? 'h2': 'h3'} align="center" gutterBottom>
              Mis proyectos
          </Typography>
          <Typography variant={ (props.width === 'xl') ? 'h4': 'h5'} align="center" paragraph>
            ¡Bienvenido! En esta sección podrás observar los trabajos más reelevantes que he desarrollado.
            Puedes acceder al repositorio donde se encuentra el código fuente en los proyectos públicos.
          </Typography>
          <Button size="large" variant="contained" color="primary" href="#project-grid" className={classes.btn}>
            Ver proyectos
          </Button>
        </Container>
      </div>
      <div id="project-grid" className={classes.contentGrid}>
        <ContentGrid data={props} id="project-grid" />
      </div>
      <Footer/>
    </div>
  );
}

export default withWidth()(Project);