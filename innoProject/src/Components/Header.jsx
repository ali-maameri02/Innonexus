import React from "react";
import baground from '../assets/Sandy illustrations_business vol.2_27.png'
import { Search } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";
const Header = () =>{
    return(
        <header >
        <div className="title mt-5 " style={{direction:'rtl'}} >
            <Slide duration={1000}>
            <h1 >
            مجتمعات مبتكرة لحلول تطوير الأعمال            </h1></Slide>
            <Slide duration={1000} delay={500}>

            <p className="lead">
            حلول رقمية متقدمة، مجتمعات تعاونية متكاملة، وبنية تحتية متطورة تعمل معًا لمواجهة تحديات التحول الرقمي.
            </p></Slide>
          
            <div className="inputgroup shadow-sm">
                <Search className="seacrhicon"/>
                <input type="search" name="search" id="search" placeholder="ما الذي تريد البحث عنه؟"/>
                <Button variant="primary" className="btn">البحث</Button>
            </div>
            <p className="d-flex flex-row align-items-start justify-content-start w-100 mt-3 lead" style={{direction:'rtl'}} > لقد جمعنا بالفعل  <strong>+3000</strong>  تحدي من <strong>50</strong>  شركة</p>
        </div>
        <div className="background-header">
        <Slide duration={1000} direction="right" >

<img src={baground} style={{background:'transparent'}} width={'500'}/></Slide>
        </div>
        </header>
    );

};
export default Header;