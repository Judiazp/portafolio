//React Components
import React from "react";
import Header from '../../molecules/header';
import Footer from '../../molecules/footer';
//Material-UI
import {
  Button,
  makeStyles,
  TextField,
  Typography,
  CssBaseline,
  Box,
  Grid,
  Avatar,
  withWidth,
  Hidden, 
  } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
//Resources
import contact from '../../../data/resources/contact.jpg'

const Contact = (props) => {
  const useStyles = makeStyles(theme => ({
    login: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "#f5f5f5",
      maxWidth: (props.width === 'xs' || props.width === 'md' ) ? '90%' : '60%'
    },
    image: {
      backgroundImage: `url(${contact})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: "100vh",
      width: "100%",
      borderRight: '5px solid #CCCCCC',
    },
    form: {
      width: '100%',
    },
    submit: {
      marginTop: theme.spacing(1),
      width: '30%'
    },
    avatar: {
      backgroundColor: theme.palette.secondary.light,
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
              <Box className={classes.login} boxShadow={3} p={5} borderRadius={16} color="default" >
                <Avatar className={classes.avatar}>
                  <EmailIcon />
                </Avatar>
                <form className={classes.form} noValidate>
                  <Typography variant="h5" align="center" >
                    Contáctame
                  </Typography>
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="user"
                    label="Nombre"
                    name="user"
                    autoFocus
                  />
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="Mensaje"
                    type="text"
                    id="text-area"
                    autoComplete="current-password"
                    multiline
                    rows={3}
                  />
                  <div align="center">
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Enviar
                    </Button>
                  </div>
                </form>
              </Box>
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
