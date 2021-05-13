import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import video from '../../../data/welcome-video.mp4';

const Video = (props) => {

  const useStyles = makeStyles((theme) => ({
    video: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
    }
  }));

  const classes = useStyles();

  return ( 
    <video muted autoPlay loop className={classes.video}>
      <source src={video} type="video/mp4" ></source>
    </video>
  )
}

export default Video;