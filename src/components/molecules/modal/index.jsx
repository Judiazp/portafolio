import React from "react";
//Material-UI
import {
  makeStyles,
  Typography,
  Box,
  withWidth,
  Button,
} from "@material-ui/core";

const Form = (props) => {

  const useStyles = makeStyles(theme => ({
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "#f5f5f5",
      maxWidth: (props.width === 'xs' || props.width === 'md') ? '90%' : '70%'
    },
    form: {
      width: '100%',
    },
    avatar: {
      marginBottom: theme.spacing(1),
      backgroundColor: theme.palette.secondary.light,
    },
    contentSocialNetwork: {
      marginTop: 20,
      display: 'flex',
      justifyContent: "center"
    },
    icons: {
      height: 50,
      width: 50,
      backgroundColor: theme.palette.primary.main,
      marginLeft: 10,
      marginRight: 10
    }
  }))

  const classes = useStyles();

  return (
    <Box className={classes.content} boxShadow={3} p={5} borderRadius={16} color="default" >
      <div className={classes.form} >
        <Typography variant="h4" align="center" gutterBottom >
          ¡Gracias { props.userName.name}!
        </Typography>
        <Typography variant="h5" align="center">
            He recibido tu mensaje. Me estaré comunicando en el menor tiempo posible.
            Espero tengas un maravilloso día.
        </Typography>
        <div className={classes.contentSocialNetwork}>
          <Button
            href="/"
            variant="contained"
            color="primary"
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default withWidth()(Form);