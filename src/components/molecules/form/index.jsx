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

  const [stateButton, setStateButton] = useState(null)
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  //Hook Validation State

  const [errorName, setErrorName] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  
  //Hooks Style

  const useStyles = makeStyles(theme => ({
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "#f5f5f5",
      maxWidth: (props.width === 'xs' || props.width === 'md' ) ? '90%' : '60%',
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
  const validationEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  
  //Funciones
  
  if (state.succeeded) {
    return(
      <Modal userName={ userName }/>
    )
  }

  const handleClick = () => {
    if (errorName === false && errorEmail === false && errorMessage === false) {
      setStateButton(true)
    }
  }
  
  return (  
    <Box className={classes.box} boxShadow={3} p={5} borderRadius={16} color="default" >
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
          label="Nombre"
          name="name"
          autoFocus
          autoComplete="off"
          onChange={(e) => {
            setUserName(e.target.value)
              if (userName.length < 2) {
                setErrorName(true)
              } else {
                setErrorName(false)
              }
          }}
          error={errorName}
          helperText={ errorName ? 'Su nombre debe contener más de 2 caracteres' : '' }
        />
        <TextField
          variant="standard"
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value)
            console.log(e.target.value)
            if (!validationEmail.test(email)) {
              setErrorEmail(true)
            } else {
              setErrorEmail(false)
            }
          }}
          error={errorEmail}
          helperText={ errorEmail ? 'Por favor ingrese una dirección de correo válida' : '' }
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="message"
          label="Mensaje"
          autoComplete="off"
          multiline
          rows={3}
          onChange={(e) => {
            setMessage(e.target.value)
            if (message.length < 10 || message === '' ) {
              setErrorMessage(true)
            } else {
              setErrorMessage(false)
            }
          }}
          error={errorMessage}
          helperText={ errorMessage ? 'El mensaje debe contener más de 10 caracteres' : '' }
        />
        <div align="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
            disabled={ (errorName || errorEmail || errorMessage || state.submitting) ? true : false }
          >
            Enviar
          </Button>
        </div>
      </form>
    </Box>  
  );
};
 
export default withWidth()(Form);