import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { Link } from 'react-router-dom';
import a from '../assets/icons/facebook.png'
import b from '../assets/icons/github.png'
import c from '../assets/icons/instagram.png'
import d from '../assets/icons/linkedin.png'
import e from '../assets/icons/web.png'
import f from '../assets/icons/twitter1.png'
import g from '../assets/icons/whatsapp.png'
import h from '../assets/icons/telegram.png'


const Contact = () => {

    const form = useRef();
    const sendEmail = event => {
      event.preventDefault();
      emailjs.sendForm('service_cymluun', 'template_5o7j0vp', form.current, 'g0j5cDpujfr2vRjoG')
        .then((result) => {
            console.log(result.text); 
            alert('Message Sent')   
             
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <div className='contact-body'>
        <div className='signboard3   p-5'>  
                <div className='contact-container'>
                    <p className='contact-info flick'>Contact Info</p>
                    <p>📧 arafathossain.baiust@gmail.com</p>  
                    <p>📞 +880 1312010261</p>
                    <p>📞 +880 1842213562</p>
                    <Link target='_blank' to='https://md-arafathossain.web.app'><p>🔗 https://md-arafathossain.web.app</p></Link>
                    <p>🏠 Cumilla 3500, Bangladesh</p>
                </div>
        </div>
        <section className='icon-section'>
        <div className='p-5 all-icons1'>
                <Link target='_blank' to='https://www.facebook.com/profile.php?id=100005652766637'><img className='all-icons2' src={a} alt="" /></Link>
                <Link target='_blank' to='https://github.com/AH-Araf'><img className='all-icons3' src={b} alt="" /></Link>
                <Link target='_blank' to='https://api.whatsapp.com/send?phone=8801312010261'><div className='ax'><img className='all-icons6' src={g} alt="" /></div></Link>
                <Link target='_blank' to='https://www.linkedin.com/in/ah-araf/'><img className='all-icons2' src={d} alt="" /></Link>
        </div>
        <div className='p-5 all-icons1'>       
                <Link target='_blank' to='https://www.instagram.com/mr.misirali/?fbclid=IwAR2fOwCWXplDFQZqAg4ummtuyYc0DnsbVqJoeMFh-4oewR1OCapufrmwCFo&__coig_restricted=1'><img  className='all-icons4' src={c} alt="" /></Link>
                <Link target='_blank' to='https://t.me/a_r_a_f'><img className='all-icons2' src={h} alt="" /></Link>
                <Link target='_blank' to='https://twitter.com/ArafHussain8?t=5Z2c9wJRjOBG4e7kJsxKjw&s=03'><img className='all-icons2' src={f} alt="" /></Link>
                <Link target='_blank' to='https://md-arafathossain.web.app'><img className='all-icons5' src={e} alt="" /></Link>
        </div>
        </section>


            {/* Email Section */}
            <section className='mail-section'>
                
                <form className='email-from' ref={form} onSubmit={sendEmail}>
                    <h1 className='mail-header flick1 contact-info signboard3'>Send a message for Md.Arafat Hossain</h1>
                    <label className='label1'>Enter Name</label>
                    <input required className='input1' type="text" name="from_name" />
                    <label className='label1'>Enter Email</label>
                    <input required className='input1' type="email" name="from_email" />
                    <label className='label1'>Write Message</label>
                    <textarea required className='input2' name="message" />
                    <input className='btn btn-outline border-2 btn-error mt-5'  type="submit" value="Send" />
                </form>
            </section>
        </div>
    );
};

export default Contact;