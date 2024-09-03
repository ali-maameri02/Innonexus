import React, { useEffect } from 'react';
import './partecepate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Partici from './imgs/partici.png';

function Partecepate() {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);

    return (
        <div className='container2'>
            <div className='row'>
                <div className='col' data-aos='fade-right'>
                    <span className='shape'>.</span>
                    <p className='title'>طريقة المشاركة</p>
                    <p className='description'>
                        TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
                    </p>
                </div>
                <div className='col part-img-container' data-aos='fade-left'>
                    <img className='part-img' src={Partici} alt='Participation' />
                </div>
            </div>
        </div>
    );
}

export default Partecepate;
