import React , {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './prev.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cerc1 from "./imgs/cerc1.png";
import Cerc2 from "./imgs/cerc2.png";
import PrevImg from "./imgs/prev.png";
import comp1 from "./imgs/comp1.png";
import comp2 from "./imgs/comp2.png";
import comp3 from "./imgs/comp3.png";


function Prev() {
    useEffect(()=> {
        AOS.init({duration:2000,
          once:true,
        });
    }, []);
    return(
        <div className='container4'>
            <p className='main-title' data-aos="zoom-in">مميزاتنا</p>
            <p className='descreption' data-aos="fade-right">This very extraordinary feature, can make learning activities more efficient</p>
            <Row className='row'>
                <Col className='col-7 col1' data-aos="fade-right">
                   
                </Col>
                <Col className='col col2' data-aos="fade-left">
                    <p className='second-section-title'>
                    <span className='colorise'>واجهة مستخدم</span> مصممة لمناقشة التحدي
                    </p>
                    <Row className='inner-Row' >
                        <Col className='col-2'>
                            <span className='comp-container'>
                                <img src={comp1} className='first-one'/>
                            </span>
                        </Col>
                        <Col className='col-'>
                        <p className='inner-description'>
                            Teachers don’t get lost in the grid view and have a dedicated Podium space.
                            </p>
                        </Col>
                    </Row>
                    <Row className='inner-Row' >
                        <Col className='col-2'>
                        <span className='comp-container'>
                            <img src={comp2} className='first-one'/>
                        </span>
                        </Col>
                        <Col className='col-'>
                            <p className='inner-description'>
                                 TA’s and presenters can be moved to the front of the class.
                            </p>
                        </Col>
                    </Row>
                    <Row className='inner-Row' >
                        <Col className='col-2'>
                        <span className='comp- last-one-container'>
                            <img src={comp3} className='last-one'/>
                        </span>
                        </Col>
                        <Col className='col-'>
                        <p className='inner-description'>
                        Teachers can easily see all students and class data at one time.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Prev;