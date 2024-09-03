import React , {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ourNumbers.css' ;
import AOS from 'aos';
import 'aos/dist/aos.css';
function OurNumbers () {
    useEffect(()=> {
        AOS.init({duration:2000,
          once:true,
        });
    }, []);
    return(
    
            <div className='container1 col'>
                <p className='main-title' data-aos="zoom-in-right">ارقامنا</p>
                <div className='rowcard m-0' >
                    
                   <Col className='col' data-aos="zoom-in">
                    <p className='number'>15k+</p>
                   <p className='title'>منافس</p>
                   </Col>
                   <Col className='col' data-aos="zoom-in">
                    <p className='number'>50+</p>
                   <p className='title'>فريق</p>
                   </Col>
                   <Col className='col' data-aos="zoom-in">
                    <p className='number'>200+</p>
                   <p className='title'>شركة و رجال اعمال</p>
                   </Col>
                   <Col className='col' data-aos="zoom-in">
                    <p className='number'>100+</p>
                   <p className='title'>تحدي</p>
                   </Col>
                   <Col className='col' data-aos="zoom-in">
                    <p className='number'>5k+</p>
                   <p className='title'>مرشد</p>
                   </Col>
              </div>
            </div>
      
    );
}

export default OurNumbers;