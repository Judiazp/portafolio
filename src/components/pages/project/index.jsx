import Header from '../../molecules/header';
import Grilla from '../../organisms/grid';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core'


//Visitar https://codepen.io/celincky/full/zdqso para tomar ejemplos de estilos para el portafolio
 
const useStyles = makeStyles((theme) => ({
 icon: {
   marginRight: theme.spacing(2),
 },
 container: {
  backgroundImage: 'url(https://unsplash.imgix.net/uploads%2F14115408840644deb16b0%2F2dc933e3?q=75&fm=jpg&auto=format&s=7f43646e4d26049c6c39890afb2e5ced)',
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
 contentGrid: {
   backgroundColor: '#E0E0E0'
 }
}));
 
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
export default function Album(props) {

 const classes = useStyles();
 return (
   <div className="welcome">
      <Header/>
      <CssBaseline />
     <main>
       {/* Hero unit */}
       <div  className={classes.container}>
         <Container maxWidth="md" >
           <Typography variant="h1" align="center" gutterBottom>
               Mis proyectos
           </Typography>
           <Typography variant="h4" align="center" paragraph>
             Something short and leading about the collection below—its contents, the creator, etc.
             Make it short and sweet, but not too short so folks don&apos;t simply skip over it
             entirely.
           </Typography>
         </Container>
           <Button size="large" color='primary' variant="contained" href="#project-grid" className={classes.btn}>
             Ver proyectos
           </Button>
       </div>
       <div id="project-grid" className={classes.contentGrid}>
        <Grilla data={props} />
       </div>
     </main>
     {/* Footer */}
     <footer className={classes.footer}>
       <Typography variant="h6" align="center" gutterBottom>
         Trabajemos juntos
       </Typography>
       <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Sitio web construido con ReactJS
       </Typography>
     </footer>
     {/* End footer */}
   </div>
 );
}
