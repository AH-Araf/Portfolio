import React from 'react';
import w from '../assets/education-img/baiust.png'
import x from '../assets/education-img/mc.png'
import y from '../assets/education-img/cmhs.png'
import z from '../assets/education-img/cms.jpg'
import { motion, AnimatePresence } from "framer-motion";
import './Education.css'

const Education = () => {
    
    return (
        <motion.div className='education-body'
        initial={{opacity: "00", }}
            animate={{opacity: "100%", }}
            exit={{opacity: "100%",  }}>
            

            <div className='msc-container'>
                <div>
                    <img src={w} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Bangladesh Army International University of Science and Technology</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <h2>Bachelor of Science in Computer Science and Engineering (BSc)</h2>
                    <p>CGPA: 3.50</p>
                    <p>March 2020 – Present</p>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={x} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Milestone College</h1>
                    <h1>Uttara, Dhaka</h1>
                    <h2>Higher Secondary School Certificate (HSC)</h2>
                    <p>CGPA: 4.92</p>
                    <p>April 2017 – May 2019</p>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={y} alt="" />
                </div>
                <div>
                <div>
                    <h1 className='text-header flick-cv'>Cumilla Modern High School</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <h2>Secondary School Certificate (SSC)</h2>
                    <p>GPA: 4.82</p>
                    <p>January 2012 – March 2017</p>
                </div>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={z} alt="" />
                </div>
                <div>
                <div>
                    <h1 className='text-header flick-cv'>Cumilla Modern School</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <h2>Primary School Certificate (PSC)</h2>
                    <p>GPA: 5.00 (Golden)</p>
                    <p>January 2007 – December 2011</p>
                </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Education;