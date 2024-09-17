import React from "react";
import baground from '../assets/39256845-removebg-preview.png'
import { Slide } from "react-awesome-reveal";

const About = () =>{
    return(
        <div className="About">
        <div className="title " >
            <Slide direction="left">
        <h1>
        برامج تمويل وتدعيم: فرص للحصول على التمويل والدعم المالي للمشاريع.        </h1></Slide>
        <Slide direction="left">

        <p className="lead">
        انضم إلى مجتمعنا واستكشف الفرص
استكشف الفرص لتطوير أفكارك وتحويلها إلى واقع ملموس، وساهم في حل تحديات التحول الرقمي.
سجل دخولك كمبتكر
.
        </p></Slide>
      
    </div>
    <div className="background-header">
<img src={baground} width={'500'}/>
    </div>
    
    </div>
    
    );
};
export default About;