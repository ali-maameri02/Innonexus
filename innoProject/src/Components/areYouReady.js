import React , {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './prev.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './areYouReady.css';
import areyou from'./imgs/areyou.png';


function AreYouReady () {
    useEffect(()=> {
        AOS.init({duration:2000,
          once:true,
        });
    }, []);
    return (
       <div className='container6'>
            <Row className='row'>
                <Col className='col1 col col1' data-aos="fade-right">
                    <p className='title'>
                    هل أنت جاهز؟
                    </p>
                    <p className='description'>
                    Class has a dynamic set of teaching tools built to be deployed and used during class.
                    Teachers can handout assignments in real-time for students to complete and submit.
                    </p>
                </Col>  
                <Col className='col1 col col2'  data-aos="fade-left">
                    <span className='ready'>
                        <img src={areyou}/>;
                    </span>
                </Col>
            </Row>
       </div>
    )
}

export default AreYouReady;