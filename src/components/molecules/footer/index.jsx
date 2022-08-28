import React from 'react';
//Material-UI
import {
    makeStyles,
    Typography,
    Link,
    withWidth,
} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = (props) => {
    const useStyles = makeStyles(theme => ({
        footer: {
            padding: theme.spacing(1),
            backgroundColor: '#fff',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        link: {
            marginLeft: 10,
            marginRight: 10,
        }
    }))

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography align="center" >
                <Link
                    href="https://www.linkedin.com/in/juan-carlos-diaz-996824186/"
                    target="_blank"
                    className={classes.link}
                >
                   <LinkedInIcon/>
                </Link>
                <Link 
                    href="https://www.instagram.com/jcarlos_diazp/?hl=es-la"
                    target="_blank"
                    className={classes.link}
                >
                   <InstagramIcon/>
                </Link>
                <Link 
                    href="https://github.com/Judiazp"
                    target="_blank"
                    className={classes.link}
                >
                   <GitHubIcon/>
                </Link>
           </Typography>
            {/* <Typography variant="subtitle2" align="center" color="textSecondary" gutterBottom>
                Para contrataciones en relación de dependencia { props.width === 'xs' ? <br/> : ' ' }
                <Link
                    href="https://drive.google.com/file/d/1iW3byGPW3VmU7cAf5NqLz2dKhtTrFXIt/view"
                    target="_blank"
                    color="primary"
                    variant="contained"
                >
                    Descargar CV
                </Link>
            </Typography> */}
            <Typography variant="subtitle2" align="center" color="textSecondary">
                {'Copyright © '} Juan Carlos Diaz 2021.
            </Typography>
        </footer>
    )
}

export default withWidth()(Footer);