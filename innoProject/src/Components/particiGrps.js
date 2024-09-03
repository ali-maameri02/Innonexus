import React , {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './particiGrps.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "react-bootstrap/Button";


function ParticiGrps () {
    useEffect(()=> {
        AOS.init({duration:2000,
          once:true,
        });
    }, []);
    return(
        <div className='container3'>
            <p className='title' data-aos="zoom-in">الفئات المشاركة في منصتنا</p>
            <p className='description' data-aos="fade-right">TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            <Row className='row'>
                <Col className='col-4 col col1' data-aos="fade-right">
                    <p className='col-title'>Companies</p>
                    <Button className='btn'>Present Your Companie Now</Button>
                </Col>
                <Col className='col-4 col col2' data-aos="fade-left">
                    <p className='col-title'>المنافسين</p>
                    <Button className='btn'>Enter Acces Code</Button>
                </Col>
            </Row>
        </div>
    );
}

export default ParticiGrps;