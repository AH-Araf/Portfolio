import React from 'react';
import b from '../assets/images/b.png'
import d from '../assets/documents/Resume.pdf'
import bootstrap from '../assets/logo/bootstrap.png'
import css  from '../assets/logo/css.png'
import es6 from '../assets/logo/es6.jpg'
import firebase from '../assets/logo/firebase.png'
import html from '../assets/logo/html.png'
import jquery from '../assets/logo/jquery.png'
import js from '../assets/logo/js.png'
import react from '../assets/logo/react.png'
import reactbootstrap from '../assets/logo/reactbootstrap.png'
import reactrouter from '../assets/logo/reactrouter.png'
import tailwind from '../assets/logo/tailwind.png'
import node from '../assets/logo/node.png'
import express from '../assets/logo/express.png'
import mongo from '../assets/logo/mongo.png'
import jwt from '../assets/logo/jwt.png'
import dotenv from '../assets/logo/dotenv.png'
import render from '../assets/logo/render.png'
import vscode from '../assets/logo/vscode.png'
import pycharm from '../assets/logo/pycharm.png'
import netlify from '../assets/logo/netlify.png'
import vercel from '../assets/logo/vercel.png'
import heroku from '../assets/logo/heroku.png'
import vercel1 from '../assets/logo/vercel1.png'
import python from '../assets/logo/python.png'
import c from '../assets/logo/c.png'
import csharp from '../assets/logo/csharp.png'
import cpp from '../assets/logo/cpp.png'

import './Home.css'
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";

const Home = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };
    
    return (
        <div className='home-body'> 
          <section className='sec-1'>
            <motion.div className='display-flex'
            initial={{opacity: "00", }}
            animate={{opacity: "100%", }}
            exit={{opacity: "100%",  }}
            >
                <div className='img-sec'><img className='profile-photo' src={b} alt="" />
                <div className='cv-resume mt-5'>
                <a className='btn btn-outline btn-info mt-top' href={d} download={d.pdf}>Download Resume</a> 
            </div>
                </div>

{/* Auto Write */}
                <div className=' display-flex1'>
                <div className='writing-auto'>
                <h1 style={{ paddingTop: '', margin: '', fontWeight: '' }}>
                {' '}
        <span className='s-text'>
          <Typewriter
            words={['Hello!', 
            'I am Md. Arafat Hossain.', 
            'Full Stack Web Developer.', 
            'Studies BSc in CSE at BAIUST (Final Year).',
            'Former Web Developer at Kondammal Trust, India.',
            'Assistant Secretary at BAIUST Computer Club.',
            'Former Full Stack Developer at Iqbal Agro and Feed Ltd.',
            'Former Instructor (Web Design) at Computer Paradise.',
           
            
            
        ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            deleteSpeed={120}
            delaySpeed={1000}
            
          />
        </span>
      </h1>
                </div>
                <h3 className='flickxyz intro signboardAA'>Introduction</h3>
                <p className='bio'>
                I am Md. Arafat Hossain. I am Currently studying Bachelor of Science (BSc) in Computer Science & Engineering (Final Year) at Bangladesh Army International University of Science and Technology (BAIUST), Cumilla.
                I am also a hard-working and self-driven Full Stack Web Developer (MERN). Proactive and dedicated, looking for opportunities to pursue technological milestones while contributing to a company's business growth.
                </p>
                </div>

            </motion.div>
            </section> 


{/* Second Section */}
  <section className='s2-header'>
    <motion.div
    initial={{opacity: "00", }}
    animate={{opacity: "100%", }}
    exit={{opacity: "100%",  }}
    > 
    <h1 className='flickxyz h11 signboardAA'>Skills</h1>
    <div className='skills-con'>

      <div className='divide signboardAA'>
        <u><h1 className='flickxyz d-header'>Front-End</h1></u>
        <p className='img-skill mt-3'><img src={html} alt="" /> HTML</p>
        <p className='img-skill mt-3'><img src={css} alt="" /> CSS</p>
        <p className='img-skill mt-3'><img src={bootstrap} alt="" /> Bootstrap</p>
        <p className='img-skill mt-3'><img src={js} alt="" /> JavaScript</p>
        <p className='img-skill mt-3'><img src={jquery} alt="" /> jQuery</p>
        <p className='img-skill mt-3'><img src={es6} alt="" /> ES6</p>
        <p className='img-skill mt-3'><img src={react} alt="" /> React</p>
        <p className='img-skill mt-3'><img src={reactrouter} alt="" /> React Router</p>
        <p className='img-skill mt-3'><img src={reactbootstrap} alt="" /> React Bootstrap</p>
        <p className='img-skill mt-3'><img src={tailwind} alt="" /> TailwindCSS</p>
        <p className='img-skill mt-3'><img src={firebase} alt="" /> Firebase</p>
    
      </div>

      <div className='divide signboardAA'>
        <u><h1 className='flickxyz d-header'>Back-End</h1></u>
        <p className='img-skill mt-3'><img src={node} alt="" /> Node.js</p>
        <p className='img-skill mt-3'><img src={express} alt="" /> Express.js</p>
        <p className='img-skill mt-3'><img src={mongo} alt="" /> MongoDB</p>
        <p className='img-skill mt-3'><img src={jwt} alt="" /> JSON web token (JWT)</p>
        <p className='img-skill mt-3'><img src={dotenv} alt="" /> Dotenv</p>
        <p className='img-skill mt-3'><img src={render} alt="" /> Render</p>
      </div>
      <div className='divide signboardAA'>
        <u><h1 className='flickxyz d-header'>Tools & Tech</h1></u>
        <p className='img-skill mt-3'><img src={vscode} alt="" /> VSCode</p>
        <p className='img-skill mt-3'><img src={pycharm} alt="" /> PyCharm</p>
        <p className='img-skill mt-3'><img src={netlify} alt="" /> Netlify</p>
        <p className='img-skill mt-3'><img src={render} alt="" /> Render</p>
        <p className='img-skill mt-3'><img src={firebase} alt="" /> Firebase</p>
        <p className='img-skill mt-3'><img src={vercel1} alt="" /> Vercel</p>
        <p className='img-skill mt-3'><img src={heroku} alt="" /> Heroku</p>
        
      </div>
      <div className='divide signboardAA'>
        <u><h1 className='flickxyz d-header'>Programming Language</h1></u>
        <p className='img-skill mt-3'><img src={python} alt="" /> Python</p>
        <p className='img-skill mt-3'><img src={js} alt="" /> JavaScript</p>
        <p className='img-skill mt-3'><img src={c} alt="" /> C Programming</p>
        <p className='img-skill mt-3'><img src={cpp} alt="" /> C++</p>
        <p className='img-skill mt-3'><img src={csharp} alt="" /> C#</p>
      </div>
      
    </div>
   
    <Marquee>
      <span className='m-img'>
      <img className='margin-ico' src={html} alt="" /> 
      <img className='margin-ico' src={css} alt="" /> 
      <img className='margin-ico' src={bootstrap} alt="" /> 
      <img className='margin-ico' src={js} alt="" /> 
      <img className='margin-ico' src={jquery} alt="" /> 
      <img className='margin-ico' src={es6} alt="" />
      <img className='margin-ico' src={react} alt="" /> 
      <img className='margin-ico' src={reactrouter} alt="" /> 
      <img className='margin-ico' src={reactbootstrap} alt="" /> 
      <img className='margin-ico' src={tailwind} alt="" /> 
      <img className='margin-ico' src={firebase} alt="" /> 
      <img className='margin-ico' src={csharp} alt="" /> 
      <img className='margin-ico' src={node} alt="" /> 
      <img className='margin-ico' src={express} alt="" /> 
      <img className='margin-ico' src={c} alt="" /> 
      <img className='margin-ico' src={mongo} alt="" /> 
      <img className='margin-ico' src={jwt} alt="" /> 
      <img className='margin-ico' src={dotenv} alt="" /> 
      <img className='margin-ico' src={render} alt="" /> 
      <img className='margin-ico' src={vscode} alt="" /> 
      <img className='margin-ico' src={pycharm} alt="" /> 
      <img className='margin-ico' src={netlify} alt="" /> 
      <img className='margin-ico' src={vercel1} alt="" /> 
      <img className='margin-ico' src={heroku} alt="" /> 
      <img className='margin-ico' src={cpp} alt="" /> 
      <img className='margin-ico' src={python} alt="" /> 
      </span>
    </Marquee>
 
    
    </motion.div>
  </section>

 
            

        </div>
    );
};

export default Home;