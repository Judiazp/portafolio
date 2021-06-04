//React Components
import React, {useState} from "react";
import Modal from '../modal'
//Material-UI
import {
 Button,
 makeStyles,
 TextField,
 Typography,
 Box,
 Avatar,
 withWidth,
} from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import CircularProgress from '@material-ui/core/CircularProgress';
//Formspree
import { useForm } from '@formspree/react';
 
const Form = (props) => {

  //Hook Form

  const [state, handleSubmit] = useForm("contact")

  //Hook State

  const [stateButton, setStateButton] = useState(false)
  const [userName, setUserName] = useState({
    name: '',
  });
  
  //Hooks Style

  const useStyles = makeStyles(theme => ({
    login: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "#f5f5f5",
      maxWidth: (props.width === 'xs' || props.width === 'md' ) ? '90%' : '60%'
    },
    form: {
      width: '100%',
    },
    submit: {
      marginTop: theme.spacing(1),
      width: '30%'
    },
    avatar: {
      marginBottom: theme.spacing(1),
      backgroundColor: (stateButton) ? '#f5f5f5' : theme.palette.secondary.light,
    },
  }));

  const classes = useStyles();
  
  //Funciones
  
  if (state.succeeded) {
    return(
      <Modal userName={ userName }/>
    )
  }

  const onChange = (e) => {
    setUserName({
      ...userName,
      [e.target.name] : e.target.value
    })
  }
  
  const handleClick = () => {
    setStateButton(true)
  }
  
  return (  
    <Box className={classes.login} boxShadow={3} p={5} borderRadius={16} color="default" >
      <Avatar className={classes.avatar}>
        { (stateButton) ? <CircularProgress color="primary" size={30} /> : <EmailIcon /> }
      </Avatar>
      <form className={classes.form} onSubmit={handleSubmit}>
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
          name="name"
          autoFocus
          onChange={onChange}
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
            onClick={handleClick}
            disabled={state.submitting}
          >
            Enviar
          </Button>
        </div>
      </form>
    </Box>  
  );
};
 
export default withWidth()(Form);