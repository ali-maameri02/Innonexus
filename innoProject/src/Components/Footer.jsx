import React from 'react';
import logo from '../assets/logos.png'
const Footer = () => {
return (
<footer style={styles.footer}>
<div style={styles.logoSection}>
<h1 style={styles.logo}><img src={logo} alt="straight_hup logo" srcset="" /></h1>

</div>
<div style={styles.linksContainer}>


<div style={styles.column}>
<h3 style={styles.columnTitle}>الدعم</h3>
<ul style={styles.list}>
<li><a href="/contact" style={styles.link}>اتصل بنا</a></li>
<li><a href="/terms" style={styles.link}>شروط الاستخدام</a></li>
<li><a href="/cookie" style={styles.link}>سياسة الكوكيز</a></li>
<li><a href="/privacy" style={styles.link}>سياسة الخصوصية</a></li>
</ul>
</div>
</div>
<div style={styles.backToTop}>
<a href="#" style={styles.link}>العودة إلى الأعلى</a>
</div>
</footer>
);
};

const styles = {
footer: {
width:'100%',
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: '0 2rem',

backgroundColor: '#f9f7f0',
color: '#333',

},
logoSection: {
textAlign: 'center',
marginBottom: '20px',
},
logo: {
fontSize: '2rem',
fontWeight: 'bold',
},
copyright: {
fontSize: '0.9rem',
color: '#666',
},
linksContainer: {
display: 'flex',
justifyContent: 'center',
alignItems: 'flex-start',
width: '100%',
padding:'2rem',
maxWidth: '900px',

marginBottom: '20px',
},
column: {
margin: '0 20px',
},
columnTitle: {
fontSize: '1.2rem',
marginBottom: '10px',
},
list: {
listStyle: 'none',
padding: 0,
},
link: {
textDecoration: 'none',
color: '#333',
fontSize: '1rem',
marginBottom: '8px',
display: 'block',
transition: 'color 0.3s',
},
linkHover: {
color: '#FFDD57',
},
backToTop: {
marginTop: '20px',
},
};

export default Footer;