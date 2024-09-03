import './introHeader.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Poly from "./imgs/Poly.png";
import Persn from "./imgs/prsn.png";
import Grp1 from './imgs/grp1.png'; 
import Grp2 from './imgs/grp2.png';
import Grp3 from './imgs/grp3.png';
import Grp4 from './imgs/grp4.png';


function Introheader(){
    return (
       
         <div className='introHeader'>
             <div className='container'>
             <div className='row justify-content-between w-100'>
                <div className='col col-container mover1 p-0'>
                    <p> الانضمام إلى المجتمعات الإبداعية والاستكشافية لتبادل الأفكار والخبرات، والمساهمة في حل تحديات التحول الرقمي في مختلف القطاعات والمشاريع النوعية.</p>  
                    <div className='row flex-nowrap w-100' >
                        <div className='row flex-nowrap '>
                            <Button className='butn-custome join-hover'>Join for free</Button>
                            <span className='second-btn-container span-hover'>
                                <span className='poly-container'><img src={Poly} /></span>
                                <Button className='second-btn'>Wath How It Works</Button>
                            </span>
                            </div>
                    </div>
                </div>
                
                <Col className='col'>
                    <div className='second-container'>
                            <img src={Persn} className='prsn mover3'/>
                            <span className='Grp grp2'>
                            <img src={Grp2}/>
                            </span>
                            <span className='Grp grp1'>
                                <img src={Grp1}/>
                            </span>
                            <span className='Grp grp3'>
                                <img src={Grp3}/>
                            </span>
                            <span className='Grp grp4'>
                                <img src={Grp4}/>
                            </span>
                    </div>
                </Col>
            </div>
            </div>
        </div>
    );
    
}

export default Introheader;