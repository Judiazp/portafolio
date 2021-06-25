//React Components
import React from "react";
import Header from '../../molecules/header';
import Form from '../../molecules/form'
import Footer from '../../molecules/footer';
//Material-UI
import {
  makeStyles,
  CssBaseline,
  Grid,
  withWidth, 
} from "@material-ui/core";
//Resources
import contact from '../../../resources/multimedia/img1.jpeg'

const Contact = (props) => {
  const useStyles = makeStyles(theme => ({
    content: {
      maxHeight: (props.width === 'xs' || props.width === 'sm' ) ? '50vh' : '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor: '#EBEBEB',
    },
    image: {
      backgroundImage: `url(${contact})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: (props.width === 'xs' || props.width === 'sm') ? '60vh' : '100vh',
      borderRight: '5px solid #CCCCCC',
      backgroundColor: '#11A1A6'
    }, 
    contentItem: {
      display: "flex",
      height: (props.width === 'xs' || props.width === 'sm') ? 'none' : '100vh',
    },
    contentContact : {
      width: '100%',
      height: (props.width === 'xs' || props.width === 'sm') ? '60vh' : '85vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    footer: {
      position: 'relative',
      bottom: 0,
      right: 0,
      width:  '100%',
      height: '15vh'
    }
  }))
  
  const classes = useStyles();

  return (
    <div className="blur"> 
      <Header/>
      <Grid container component="main" className={classes.content} >
        <CssBaseline />
        <Grid item xs={12} md={6} className={classes.image}/>
        <Grid container md={6} className={classes.contentItem}>
          {/* <Grid container className={classes.contenedorLadilla}> */}
            <Grid item xs={12} className={classes.contentContact}>
              <Form/>
            </Grid>
            <Grid item xs={12} className={classes.footer}>
              <Footer/>
            </Grid>
          </Grid>
        {/* </Grid> */}
      </Grid>
    </div>
  );
};

export default withWidth()(Contact);
