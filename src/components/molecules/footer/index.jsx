import React from 'react';
//Material-UI
import {
    makeStyles,
    Typography,
    Link } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    const useStyles = makeStyles(theme => ({
        footer: {
          padding: theme.spacing(2),
          backgroundColor: '#fff',
        },
        link: {
          marginLeft: '10px',
        }
    }))
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography align="center" gutterBottom>
                <Link 
                    href="https://www.linkedin.com/in/juan-carlos-diaz-996824186/"
                    target="_blank"
                    className={classes.link}
                >
                    <LinkedInIcon/>
                </Link>
                <Link href="https://www.instagram.com/jcarlos_diazp/?hl=es-la" 
                    target="_blank" 
                    className={classes.link}
                >
                    <InstagramIcon/>
                </Link>
                <Link href="https://github.com/Judiazp" 
                    target="_blank" 
                    className={classes.link}
                >
                    <GitHubIcon/>
                </Link>
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Para contrataciones en relacion de dependencia&nbsp;
                <Link 
                    href="https://drive.google.com/file/d/1A-J1pD-ndO0SfYLjH3nNgThVDYAWr5Bv/view?usp=sharing"
                    target="_blank"
                >
                    Obtén aqui mi CV</Link>
            </Typography>
        </footer>
    )
}

export default Footer;