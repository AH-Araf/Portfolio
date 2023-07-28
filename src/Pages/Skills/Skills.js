import React from 'react';
import a from '../assets/certificate/a.png'
import b from '../assets/certificate/b.png'
import c from '../assets/certificate/c.png'
import d from '../assets/certificate/d.jpg'
import e from '../assets/certificate/e.png'
import f from '../assets/certificate/f.png'
import g from '../assets/certificate/g.png'
import h from '../assets/certificate/h.png'
import i from '../assets/certificate/i.jpg'
import j from '../assets/certificate/j.png'
import l from '../assets/certificate/l.png'
import m from '../assets/certificate/m.png'
import k from '../assets/certificate/k.jpeg'

import './Skills.css'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
const Skills = () => {
    return (
        <motion.div className='skill-body'
        initial={{opacity: "00", }}
            animate={{opacity: "100%", }}
            exit={{opacity: "100%",  }}>
            
           
               
               <div className='msc-containerS'>
                <div>
                    <img src={a} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Kondammal Trust Foundation</h1>
                    <h1>Chennai, India</h1>
                    <h1>Web Development Intern</h1>
                    <p>January 1, 2023 – February 1, 2023</p>
                    <p>Internship Duration: 1 Month</p>
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={b} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Iqbal Agro and Feed Limited</h1>
                    <h1>Dhaka, Bangladesh</h1>
                    <h1>Full Stack Development Intern</h1>
                    <p>March 1, 2023 – June 1, 2023</p>
                    <p>Internship Duration: 3 Month</p>
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={c} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Programming hero</h1>
                    <h1>Level-4, 34, Awal Centre, Banani, Dhaka</h1>
                    <h2>Course: Complete Web Development</h2>
                    <p>Batch: 06</p>
                    <p>Course Duration: 6 Month</p>
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={d} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>BAIUST Computer Club</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <h1>Assistant Secretary</h1>
                    <p>December 1, 2022 – Present</p>
                    <p>Duration: 1 Year</p>
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={e} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'> ICT Division (Bangladesh)</h1>
                    <h2>Course: Mobile Application Development (Cross Platform)</h2>
                    <p>Issue Date: February 27, 2022</p>
                    <p>Course Duration: Two Hundred Hours</p>
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={l} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Bohubrihi</h1>
                    <h2>Course: Pathway to Software Engineering</h2>
                    <p>Issue Date: July 27, 2023</p>
                    
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={m} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'> Creative IT Institute</h1>
                    <h2>Workshop and Training on 'Blockchain and Machine Learning'</h2>
                    <p>Issue Date: July 25, 2023</p>
                    <p>Workshop and Training Duration: 3 Days</p>
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={f} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Internshala</h1>
                    <h1>India</h1>
                    <h2>Certificate of Selection</h2>
                    <h1>Web Development Internship at Dream Bharat Foundation</h1>
                    <p>Date: December 10, 2022</p>
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={g} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Data Camp</h1>
                    <h2>Course: Introduction to Python</h2>
                    <p>Issue Date: July 13, 2022</p>
                    <p>Data Camp Profile: <Link target='_blank' to='https://www.datacamp.com/profile/AH-Araf'><small className='small-cer'>https://www.datacamp.com/profile/AH-Araf</small></Link></p>
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={h} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Data Camp</h1>
                    <h2>Course: Introduction to SQL</h2>
                    <p>Issue Date: July 14, 2022</p>
                    <p>Data Camp Profile: <Link target='_blank' to='https://www.datacamp.com/profile/AH-Araf'><small className='small-cer'>https://www.datacamp.com/profile/AH-Araf</small></Link></p>
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={i} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>IPIT Limited</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <p>Course: Fundamental Programming</p>
                    <h1>Issue Date: September 09, 2021</h1>
                    <p>Course Duration: Three Months</p>
                </div>
                </div>

                <div className='msc-containerS'>
                <div>
                    <img src={j} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Google</h1>
                    <p>Course: Fundamentals of Digital Marketing</p>
                    <h1>Issue Date: September 25, 2021</h1>
                    <p>Certificate ID: J2T QQT LUL</p>
                    
                </div>
                </div>

                {/* <div className='msc-containerS'>
                <div>
                    <img src={k} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Bangladesh Army International University of Science and Technology</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <h2>Batchelor of Science in Computer Science and Engineering (BSc)</h2>
                    <p>CGPA: 3.50</p>
                    <p>March 2020 – Present</p>
                </div>
                </div> */}

               
            </motion.div>
       
    );
};

export default Skills;