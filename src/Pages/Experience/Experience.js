import React from 'react';
import w from '../assets/education-img/cp.png'
import x from '../assets/education-img/kt.png'
import y from '../assets/education-img/bcc.png'
import z from '../assets/education-img/araf.png'

import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
    return (
        <motion.div className='education-body'
        initial={{opacity: "00", }}
            animate={{opacity: "100%", }}
            exit={{opacity: "100%",  }}>
          

            <div className='msc-container'>
                <div>
                    <img src={x} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Kondammal Trust Foundation</h1>
                    <h1>Chennai, India</h1>
                    <h1>Web Development Intern</h1>
                    <p>January 1, 2023 – February 1, 2023</p>
                    <p>Duration: 1 Month</p>
                    
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={y} alt="" />
                </div>
                <div>
                <div>
                    <h1 className='text-header flick-cv'>BAIUST Computer Club</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <h1>Assistant Secretary</h1>
                    <p>December 1, 2022 – Present</p>
                    <p>Duration: 1 Year</p>
                    
                </div>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={z} alt="" />
                </div>
                <div>
                <div>
                    <h1 className='text-header flick-cv'>Iqbal Agro and Feed Limited</h1>
                    <h1>Dhaka, Bangladesh</h1>
                    <h1>Full Stack Development Intern</h1>
                    <p>March 1, 2023 – June 1, 2023</p>
                    <p>Duration: 3 Month</p>
                    
                
                </div>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={w} alt="" />
                </div>
                <div>
                <div>
                    <h1 className='text-header flick-cv'>Computer Paradise</h1>
                    <h1>D.T Road, New Monsurabad, Chattogram, Bangladesh</h1>
                    <h1>Instructor (Web Design)</h1>
                    <p>November 1, 2020 - May 1, 2021</p>
                    <p>Duration: 6 Month</p>
                    
                
                </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Experience;