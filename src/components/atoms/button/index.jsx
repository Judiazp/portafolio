import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import GitHubIcon from '@material-ui/icons/GitHub';
import PageviewIcon from '@material-ui/icons/Pageview';

const Buttons = (props) => {
    const { data } = props
    const useStyles = makeStyles((theme) => ({
        btn: {
          backgroundColor: '#17d0d5',
          marginBottom: '10px',
          color: '#fff'
        },
    }));
    const classes = useStyles();
    if (data.isPublic) {
        return(
            <CardActions>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="primary" 
                    className={classes.btn} 
                    href={data.linkPage} 
                    target="_blank"
                    startIcon={<PageviewIcon />}
                >
                    visitar
                </Button>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="primary" 
                    className={classes.btn} 
                    href={data.linkCode} 
                    target="_blank"
                    startIcon={<GitHubIcon />}
                >
                    ver código
                </Button>
            </CardActions>
        )
    } if (data.NoInterface) {
        return (
            <CardActions>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="primary" 
                    className={classes.btn} 
                    href={data.linkCode} 
                    target="_blank"
                    startIcon={<GitHubIcon />}
                >
                    Ver código
                </Button>
            </CardActions>
        )
    }
    if (data.isPublic === false) {
        return (
            <CardActions>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="primary" 
                    className={classes.btn} 
                    href={data.linkCode} 
                    target="_blank"
                    startIcon={<PageviewIcon />}
                >
                    Visitar
                </Button>
            </CardActions>
        )
    }
    else {
        return (
            <CardActions>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="primary" 
                    className={classes.btn} 
                    href={data.linkPage} 
                    target="_blank"
                    startIcon={<PageviewIcon />}
                >
                    ve mi perfil de GitHub
                </Button>
            </CardActions>
        )
    }
}

export default Buttons;