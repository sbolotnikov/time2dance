import React, { Fragment, useEffect, useState } from 'react';
import gsap from 'gsap';
import "animate.css/animate.min.css";
import Navigation from '../components/Navigation';
import "../css/style.css";
import { motion } from 'framer-motion';

function ToRenderEverything() {




  return (
    <motion.div
      initial='out'
      animate='end'
      exit='out'
      variants={
        {in: {
          opacity: 1,
          x: -300
        },
        out: {
          opacity: 0,
          x: 300
        },
        end: {
          x: 0,
          opacity: 1,
          
        }
      }
    }>
{/* 
      <div className="heroSection"> */}
        <Navigation names={['Home', 'Social Dancing', 'Competitors', 'Wedding Dance', "Kid's dancing", "More"]} links={['/', '/anim', '', '', '', '']} />
      {/* </div> */}
      <h2>Social Guide</h2>
      <img src={process.env.PUBLIC_URL + "/./assets/images/menuIcons/hero-img.jpg"} alt="logo" />
    </motion.div >
  )
}

export default ToRenderEverything;