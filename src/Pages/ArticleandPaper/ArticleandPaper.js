import React from 'react';
import a from '../assets/projects/a.png'
import b from '../assets/projects/b.png'
import c from '../assets/projects/c.png'
import d from '../assets/projects/d.png'
import e from '../assets/projects/e.png'
import f from '../assets/projects/f.png'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const ArticleandPaper = () => {
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
                    <i><h1 className='text-header flick-cv'>BD Vacancies</h1></i>
                    <i><small className='flick-cv'>A MERN Stack project</small></i>
                    <div>
                        <Link className="btn btn-outline btn-info m-3" target='_blank' to='https://job-portal-2d401.web.app/'>Live Website</Link>
                        <Link className="btn btn-outline btn-info" target='_blank' to='https://github.com/AH-Araf/Job-Portal-Client-Side'>Client Side</Link>
                        <Link className="btn btn-outline btn-info m-3" target='_blank' to='https://github.com/AH-Araf/Job-Portal-Server-Side'>Server Side</Link>
                    </div>
                    <small>
                    • Here users can advertise jobs for his company or office. <br />
                    • Anyone can apply for the job of their choice. <br />
                    • A user only needs to create a profile once to apply for any job. <br />
                    • Category wise candidate's information will be shown to the person who advertised the job. <br />
                    • It is possible to easily find the desired job by searching the job or filtering according to the category. <br />
                    • Implemented public and private routes using React Router. <br />
                    • The user must be logged in to apply for a job or hire a worker. <br />
                    </small>

                    <i><p className='mt-5 flick-cv'>Tools & Technology:</p></i>
                    <small>
                    React, TailwindCss, DaisyUI, React Router, Node.Js, ExpressJS, <br />
                    JSON web token (JWT), Firebase, MongoDB, Vercel, Render, Git, VS Code.
                    </small>
                </div>
                </div>

                {/*  */}

                <div className='msc-containerS'>
                <div>
                    <img src={b} alt="" />
                </div>
                <div>
                    <i><h1 className='text-header flick-cv'>Buy-Sell Bangladesh</h1></i>
                    <i><small className='flick-cv'>A MERN Stack project</small></i>
                    <div>
                        <Link className="btn btn-outline btn-info m-3" target='_blank' to='https://assignment12-ce1f6.web.app/'>Live Website</Link>
                        <Link className="btn btn-outline btn-info" target='_blank' to='https://github.com/AH-Araf/A12_Client_-Main-'>Client Side</Link>
                        <Link className="btn btn-outline btn-info m-3" target='_blank' to='https://github.com/AH-Araf/A12_Server_-Main-'>Server Side</Link>
                    </div>
                    <small>
                    • On this website users can sell used or new phones. <br />
                    • Phones can be sold in these 3 categories: iPhone, Android, Symbian. <br />
                    • Implemented Public Route, Private Route & Admin Route. <br />
                    • Admin can advertise any phone on home page if he wants. <br />
                    • Admin can make any seller a verified seller. <br />
                    • Anyone can purchase the phone of their choice. <br />
                    • In order to buy or sell, the user must be logged in to the website. <br />
                    • Stored all data in MongoDB and implemented the Rest API and CRUD operations. <br />
                    </small>

                    <i><p className='mt-5 flick-cv'>Tools & Technology:</p></i>
                    <small>
                    React, React Bootstrap, React Router, Node.Js, ExpressJS, Git, <br />
                    JSON web token (JWT), Firebase, MongoDB, Vercel, Render, VS Code.
                    </small>
                </div>
                </div>

                {/*  */}

                <div className='msc-containerS'>
                <div>
                    <img src={c} alt="" />
                </div>
                <div>
                    <i><h1 className='text-header flick-cv'>Chitro Photography</h1></i>
                    <i><small className='flick-cv'>A MERN Stack project</small></i>
                    <div>
                        <Link className="btn btn-outline btn-info m-3" target='_blank' to='https://assignment11-43a56.web.app/'>Live Website</Link>
                        <Link className="btn btn-outline btn-info" target='_blank' to='https://github.com/AH-Araf/A11_Client_-Main-'>Client Side</Link>
                        <Link className="btn btn-outline btn-info m-3" target='_blank' to='https://github.com/AH-Araf/A11_Server_-Main-'>Server Side</Link>
                    </div>
                    <small>
                    • Customers can hire photographers of any category from this website. <br />
                    • Users can give their review or comment in comment section. <br />
                    • It is possible to hire a photographer by reading other people's reviews. <br />
                    • On the other hand, anyone can post their photography services here. <br />
                    • Login is required to post photography services or hire a photographer. <br />
                    • Stored all data in MongoDB and implemented the Rest API and CRUD operations. <br />
                    </small>

                    <i><p className='mt-5 flick-cv'>Tools & Technology:</p></i>
                    <small>
                    React, React Bootstrap, React Router, Node.Js, ExpressJS, Git, <br />
                    JSON web token (JWT), Firebase, MongoDB, Vercel, Render, VS Code.
                    </small>
                </div>
                </div>

                {/*  */}

                <div className='msc-containerS'>
                <div>
                    <img src={d} alt="" />
                </div>
                <div>
                    <i><h1 className='text-header flick-cv'>BD Web Course</h1></i>
                    <i><small className='flick-cv'>A Full Stack project</small></i>
                    <div>
                        <Link className="btn btn-outline btn-info m-3" target='_blank' to='https://assignment-10-51b9f.web.app/'>Live Website</Link>
                        <Link className="btn btn-outline btn-info" target='_blank' to='https://github.com/AH-Araf/A10_Client_-Main-'>Client Side</Link>
                        <Link className="btn btn-outline btn-info m-3" target='_blank' to='https://github.com/AH-Araf/A10_Server_-Main-'>Server Side</Link>
                    </div>
                    <small>
                    • Developed UI using ReactJS, React Bootstrap and implemented responsiveness. <br />
                    • Implemented firebase authentication. <br />
                    • Accessible and dynamic web pages. <br />
                    • implemented the Rest API. <br />
                    • Implemented public and private routes using React Router. <br />
                    </small>

                    <i><p className='mt-5 flick-cv'>Tools & Technology:</p></i>
                    <small>
                    React, React Bootstrap, React Router, ExpressJS, Git, <br />
                    JSON web token (JWT), Firebase, MongoDB, Vercel, VS Code.
                    </small>
                </div>
                </div>

                {/*  */}

                <div className='msc-containerS'>
                <div>
                    <img src={e} alt="" />
                </div>
                <div>
                    <i><h1 className='text-header flick-cv'>AraF'S QuiZ</h1></i>
                    <i><small className='flick-cv'>A Front-End project</small></i>
                    <div>
                        <Link className="btn btn-outline btn-info m-3" target='_blank' to='https://unrivaled-macaron-f10619.netlify.app/'>Live Website</Link>
                        <Link className="btn btn-outline btn-info" target='_blank' to='https://github.com/AH-Araf/Assignment9'>Client Side</Link>
                       
                    </div>
                    <small>
                    • Developed UI using ReactJS, React Bootstrap and implemented responsiveness. <br />
                    • Accessible and dynamic web pages. <br />
                    • Implemented quiz statistics using Recharts. <br />
                    </small>

                    <i><p className='mt-5 flick-cv'>Tools & Technology:</p></i>
                    <small>
                        HTML, CSS, React, React Bootstrap, React Router, <br />
                        Git, Firebase, VS Code, Netlify.
                    </small>
                </div>
                </div>

                {/*  */}

                <div className='msc-containerS'>
                <div>
                    <img src={f} alt="" />
                </div>
                <div>
                    <i><h1 className='text-header flick-cv'>Top-5 Players Selection</h1></i>
                    <i><small className='flick-cv'>A JavaScript project</small></i>
                    <div>
                        <Link className="btn btn-outline btn-info m-3" target='_blank' to='https://velvety-melomakarona-4399df.netlify.app/'>Live Website</Link>
                        <Link className="btn btn-outline btn-info" target='_blank' to='https://github.com/AH-Araf/A5'>Client Side</Link>
                        
                    </div>
                    <small>
                    • Anyone can select their favorite 5 players on this website.  <br />
                    • A player cannot be selected twice. <br />
                    • A notification will appear when more than five players are selected. <br />
                    • The value is shown by multiplying the total number of players by the budget per player. <br />
                    • This is a pure JavaScript project. <br />
                    </small>

                    <i><p className='mt-5 flick-cv'>Tools & Technology:</p></i>
                    <small>
                    HTML, CSS, JavaScript, Bootstrap, Git, VS Code, Netlify.
                    </small>
                </div>
                </div>


               
            </motion.div>
    );
};

export default ArticleandPaper;