import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import a from '../assets/icons/facebook.png'
import b from '../assets/icons/github.png'
import c from '../assets/icons/instagram.png'
import d from '../assets/icons/linkedin.png'
import e from '../assets/icons/orcid.png'


const Footer = () => {
    return (
        <div className='footer mt-1'>
            <div className='footer-container p-5'>
            <p><small>All copyright reserved - Md.Arafat Hossain</small>
            
            </p>
            <p>
                
                <small>📧 arafathossain.baiust@gmail.com</small><br />
                <small>📞 +880 1312010261</small> <br />
                <small>📞 +880 1842213562</small> <br />
                <small>🏠 Cumilla 3500, BD</small>
            </p>
            </div>
            <i class="fa-solid fa-flag"></i>
            
          
            <div className='p-5 all-icons'>
                <Link target='_blank' to='https://www.facebook.com/profile.php?id=100005652766637'><img className='img1' src={a} alt="" /></Link>
                <Link target='_blank' to='https://github.com/AH-Araf'><img  className='img2' src={b} alt="" /></Link>
                <Link target='_blank' to='https://www.instagram.com/mr.misirali/?fbclid=IwAR2fOwCWXplDFQZqAg4ummtuyYc0DnsbVqJoeMFh-4oewR1OCapufrmwCFo&__coig_restricted=1'><img target='_blank' className='img3' src={c} alt="" /></Link>
                <Link target='_blank' to='https://www.linkedin.com/in/ah-araf/'><img className='img4' src={d} alt="" /></Link>
            </div>
        </div>
    );
};

export default Footer;