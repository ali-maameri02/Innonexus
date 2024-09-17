import React from "react";
import baground from '../assets/arabian-man.png'
import { Search } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";
const Header = () =>{
    return(
        <header>
        <div className="title " >
            <Slide duration={1000}>
            <h1>
            مجتمعات مبتكرة لحلول تطوير الأعمال            </h1></Slide>
            <Slide duration={1000} delay={500}>

            <p className="lead">
            حلول رقمية متقدمة، مجتمعات تعاونية متكاملة، وبنية تحتية متطورة تعمل معًا لمواجهة تحديات التحول الرقمي.
            </p></Slide>
            <Link to="/signup" className="d-flex flex-row justify-content-end text-decoration-none" >

<Button variant="light" className="btn mb-5 w-25" style={{backgroundColor:'#EFCC3D'}}>ابدأ </Button>
</Link>
            <div className="inputgroup">
                <Search className="seacrhicon"/>
                <input type="search" name="search" id="search" />
                <Button variant="primary" className="btn">Search</Button>
            </div>
        </div>
        <div className="background-header">
        <Slide duration={1000} direction="right" >

<img src={baground} style={{background:'transparent'}} width={'500'}/></Slide>
        </div>
        </header>
    );

};
export default Header;