import React, { useEffect } from 'react';
import './contactCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './imgs/logo.png'; 
import facebook from './imgs/facebook.png';
import instagram from './imgs/instagram.png';
import linkDin from './imgs/linkDin.png';
import Button from "react-bootstrap/Button";

function ContactCard() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='container7' data-aos="fade-left">
            <div className='row1'> 
                <div className='logo-container'>
                    <img src={logo} alt="Logo"/>
                    <span className='logo-span'><span className="slash"></span>InnoNexus Hub</span>
                </div>
                <div className='right'>
                    <a href="#"><img src={facebook} alt="Facebook" className='social-icon'/></a>
                    <a href="#"><img src={instagram} alt="Instagram" className='social-icon'/></a>
                    <a href="#"><img src={linkDin} alt="LinkedIn" className='social-icon'/></a>
                </div>
            </div>
            <div className='row2'>
                <p className='title'>Subscribe to get our Newsletter</p>
                <form>
                    <input placeholder='Your Email' className='input' />
                    <Button className='btn'>Subscribe</Button>
                </form>
            </div>
            <div className='row3'>
                <a href='#' className='link1'>Careers</a>
                <a href='#' className='link2'>Privacy Policy</a>
                <a href='#' className='link3'>Terms & conditions</a>
            </div>
            <div className='footer'>
                <p>2024 design by our company</p>
            </div>
        </div>
    );
}

export default ContactCard;
