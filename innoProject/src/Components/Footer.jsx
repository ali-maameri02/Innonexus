import React from 'react';
import logo from '../assets/logo.png'
const Footer = () => {
return (
<footer style={styles.footer}>
<div style={styles.logoSection}>
<h1 style={styles.logo}><img src={logo} alt="straight_hup logo" srcset="" /></h1>
<p style={styles.copyright}>ستريت_هوب
 2024</p>
</div>
<div style={styles.linksContainer}>
<div style={styles.column}>
<h3 style={styles.columnTitle}>الصفحات</h3>
<ul style={styles.list}>
<li><a href="/" style={styles.link}>الرئيسية</a></li>
<li><a href="/subjects" style={styles.link}>المواضيع</a></li>
<li><a href="/about" style={styles.link}>من نحن</a></li>
<li><a href="/signup" style={styles.link}>إنشاء حساب</a></li>
<li><a href="/signin" style={styles.link}>تسجيل الدخول</a></li>
</ul>
</div>
<div style={styles.column}>
<h3 style={styles.columnTitle}>التواصل الاجتماعي</h3>
<ul style={styles.list}>
<li><a href="https://twitter.com" style={styles.link}>تويتر</a></li>
<li><a href="https://facebook.com" style={styles.link}>فيسبوك</a></li>
<li><a href="https://instagram.com" style={styles.link}>إنستغرام</a></li>
</ul>
</div>
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
padding: '2rem',
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