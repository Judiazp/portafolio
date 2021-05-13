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
  Hidden } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
//Resources
import contact from '../../../data/resources/contact.jpg'

  const Register = (props) => {
    const useStyles = makeStyles(theme => ({
      login: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#f5f5f5",
        maxWidth: (props.width === 'xs' || props.width === 'md') ? '90%' : '60%'
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
        marginTop: theme.spacing(1),
      },
      submit: {
        marginTop: theme.spacing(2),
        width: '30%'
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.light,
      },
      content: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#EBEBEB',
      },
      contentItem: {
        display: "flex",
        height: '100vh'
      },
      contentContact : {
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(6),
      },
  }))
  
  const classes = useStyles();

  return (
    <div className="blur"> 
      <Header />
      <Grid container component="main" className={classes.content} maxWidth="xs">
        <CssBaseline />
        <Hidden smDown>
          <Grid item xs={12} sm={12} md={7} className={classes.image}/>
        </Hidden>
        <Grid container md={5} sm={12} className={classes.contentItem}>
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
                  rows={4}
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
          <Grid item xs={12}>
            <Footer/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withWidth()(Register);
