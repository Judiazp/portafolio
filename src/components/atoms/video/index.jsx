import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import video from '../../../resources/multimedia/welcome-video.mp4';

const Video = () => {

  const useStyles = makeStyles((theme) => ({
    video: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      backgroundColor: '#0C6B6F'
    }
  }));

  const classes = useStyles();

  return ( 
    <video autoPlay loop className={classes.video}>
      <source src={video} type="video/mp4" ></source>
    </video>
  )
}

export default Video;