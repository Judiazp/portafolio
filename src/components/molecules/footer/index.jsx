import React from 'react';
//Material-UI
import {
    makeStyles,
    Typography,
    Link,
    withWidth,
} from "@material-ui/core";

const Footer = (props) => {
    console.log(props);
    const useStyles = makeStyles(theme => ({
        footer: {
            padding: theme.spacing(2),
            backgroundColor: '#fff',
        },
    }))

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="subtitle2" align="center" color="textSecondary">
                Para contrataciones en relacion de dependencia{(props.width === 'xs') ? <br /> : ' '}
                <Link
                    href="https://drive.google.com/file/d/1A-J1pD-ndO0SfYLjH3nNgThVDYAWr5Bv/view?usp=sharing"
                    target="_blank"
                    color="primary"
                    variant="contained"
                >
                    Obtén aquí mi CV
                </Link>
            </Typography>
            <Typography variant="subtitle2" align="center" color="textSecondary">
                {'Copyright © '} Juan Carlos Diaz 2021.
            </Typography>
        </footer>
    )
}

export default withWidth()(Footer);