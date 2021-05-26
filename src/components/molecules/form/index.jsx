//React Components
import React from "react";
//Material-UI
import {
  makeStyles,
  Typography,
  Box,
  Avatar,
  withWidth,
  Link,
} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

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
          ¡Trabajemos juntos!
        </Typography>
        <Typography variant="h5" align="center">
          Sígueme en mis redes sociales para obtener más información sobre mi carrera profesional
          y estar al tanto de todas las novedades acerca de mis
          proyectos. ¡Te espero!
        </Typography>
        <div className={classes.contentSocialNetwork}>
          <Link
            href="https://www.linkedin.com/in/juan-carlos-diaz-996824186/"
            target="_blank"
            className={classes.link}
          >
            <Avatar className={classes.icons}>
              <LinkedInIcon />
            </Avatar>
          </Link>
          <Link
            href="https://www.instagram.com/jcarlos_diazp/?hl=es-la"
            target="_blank"
            className={classes.link}
          >
            <Avatar className={classes.icons}>
              <InstagramIcon />
            </Avatar>
          </Link>
          <Link
            href="https://github.com/Judiazp"
            target="_blank"
            className={classes.link}
          >
            <Avatar className={classes.icons}>
              <GitHubIcon />
            </Avatar>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default withWidth()(Form);