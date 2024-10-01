import React from 'react';
import cerc1 from '../assets/Sandy illustrations_business vol.2_05.png'
import cerc2 from '../assets/Sandy illustrations_business vol.2_06.png'
const LearningSection = () => {
  return (
    <section style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>منصة الابتكار المفتوح.</h1>
        <p style={styles.subHeading}>
        اكتشف كيف تسهم مجتمعاتنا في رقمنة الحلول، تحسين العمليات، وتقديم حلول متكاملة. عبر منصتنا، يمكن للشركات الاستفادة من أدوات مبتكرة لإدارة الأفكار وتحويلها إلى إنجازات ملموسة        </p>
        <button style={styles.button} ><a href="/signup" className='text-decoration-none bg-transparent text-black'>انضم الآن</a> </button>
      </div>
      <div className='learnsectionimgs' style={styles.imageContainer}>
        {/* Image background with small plant decorations */}
        <img src={cerc1} alt="left decoration" style={styles.leftImage} />
        <img src={cerc2} alt="right decoration" style={styles.rightImage} />
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '40px 50px',
    padding_bottom:'0',
    backgroundColor: '#f9f7f0',
    minHeight: '50vh',
  },
  textContainer: {
    maxWidth: '600px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#FFDD57',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#FFC107',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw',
    maxWidth: '800px',
  },
  leftImage: {
    width: '20rem',
    objectFit: 'contain',
    Animation:'  animation: headeranimation infinite 5s alternate-reverse     '
  },
  rightImage: {
    width: '20rem',
    objectFit: 'contain',
  },
  
};

export default LearningSection;