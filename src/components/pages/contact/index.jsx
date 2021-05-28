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
  Hidden, 
} from "@material-ui/core";
//Resources
import contact from './../../../resources/multimedia/img1.jpeg'

const Contact = (props) => {

  const useStyles = makeStyles(theme => ({
    image: {
      backgroundImage: `url(${contact})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: "100vh",
      width: "100%",
      borderRight: '5px solid #CCCCCC',
    }, 
    content: {
      maxHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor: '#EBEBEB',
    },
    contentItem: {
      display: "flex",
      height: '100vh',
    },
    contentContact : {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing(7),
    },
    footer: {
      position: 'fixed',
      bottom: '0',
      width: (props.width === 'sm' || props.width === 'xs' ) ? '100%' : '50%'
    }
  }))
  
  const classes = useStyles();

  return (
    <div className="blur"> 
      <Header/>
      <Grid container component="main" className={classes.content} >
        <CssBaseline />
        <Hidden smDown>
          <Grid item xs={12} md={6} className={classes.image}/>
        </Hidden>
        <Grid container md={6} className={classes.contentItem}>
          <Grid container>
            <Grid item xs={12} className={classes.contentContact}>
              <Form/>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.footer}>
            <Footer/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withWidth()(Contact);
