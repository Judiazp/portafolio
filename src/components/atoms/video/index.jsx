import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import video from '../../../resources/multimedia/video.mp4';
import preVideo from '../../../resources/multimedia/pre-video.jpeg'

const Video = () => {

  const useStyles = makeStyles((theme) => ({
    video: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      backgroundColor: '#222222'
    },
    carga: {
      height: '100%',
      width: '100%',
      top: 0,
    }
  }));

  const classes = useStyles();

  return ( 
    <video autoPlay preload poster={preVideo} loop className={classes.video}>
      <source src={video} type="video/mp4" ></source>
    </video>
  )
}

export default Video;