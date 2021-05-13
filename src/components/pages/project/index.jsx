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
import { Button } from '@material-ui/core';
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
      background: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    btn: {
      padding: '15px',
      width: '40%',
      fontSize:'20px',
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
      <main>
        <div  className={classes.container}>
          <Video/>
          <Container maxWidth="md" className={classes.presentation}>
            <Typography variant="h1" align="center" gutterBottom>
                Mis proyectos
            </Typography>
            <Typography variant="h4" align="center" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
          <Button size="large" variant="contained" color="primary" href="#project-grid" className={classes.btn}>
            Ver proyectos
          </Button>
          </Container>
        </div>
        <div id="project-grid" className={classes.contentGrid}>
          <ContentGrid data={props} id="project-grid" />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Project;