import React from "react";
import areyou from '../assets/Sandy illustrations_business vol.2_24.png'
import { Slide } from "react-awesome-reveal";

const Learn =()=>{
    return(
<div className="Learn-section">
<div className="title " >
<Slide direction="right">

            <h1>
             لديك ما تقدمه؟              </h1></Slide>
             <Slide direction="right">
            <p className="lead">
            هنا، تجد منصة مفتوحة لجميع الأفكار والخبرات والابتكارات، سواء كانت فكرة بسيطة أو مشروعًا ضخمًا. نقدم لك مجموعة متنوعة من المجالات.
            </p></Slide>
            <a href="/signup" style={{width:'10vw'}} className="">سجل دخولك كمبتكر </a>
        </div>
        <div className="background-header">
<img src={areyou} width={'500'}/>
        </div>
</div>
    );
    
};
export default Learn;