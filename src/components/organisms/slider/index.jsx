//React components
import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core'
import 'swiper/swiper-bundle.css';
//Resources
import img1 from "../../../data/resources/img1.jpeg";
import img2 from "../../../data/resources/img2.jpg";
import img3 from "../../../data/resources/img3.jpg";
import img4 from "../../../data/resources/img4.jpg";

SwiperCore.use([Pagination, Autoplay ]);

const Slider = () => {
  const slides = [img1, img2, img3, img4];
  const useStyles = makeStyles((theme) => ({
    img: {
      height: '100vh',
    },
    swiperContainer: {
      width: '100%',
    },
    swiperWrapper: {
      paddingInlineStart: '0',
      listStyle: 'none'
    }
  }));   

  const classes = useStyles();

  return (
    <Swiper 
      tag="section" 
      wrapperTag="ul" 
      id="main" 
      pagination={true} 
      autoplay={{
        "delay": 3000,
        "disableOnInteraction": false
      }} 
      spaceBetween={0}
      className={classes.swiperContainer}
    >
      {slides.map((items) =>(
        <SwiperSlide key={`slide-${items}`} tag="li" className={classes.swiperWrapper}>
          <CardMedia
            image={items}
            className={classes.img}
          /> 
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

export default Slider;