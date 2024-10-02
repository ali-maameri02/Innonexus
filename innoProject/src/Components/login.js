import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // استيراد SweetAlert2
import '../index.css';
import image1 from '../assets/Sandy illustrations_business vol.2_44.png'; // استيراد الصورة المستخدمة في التصميم
import { Slide } from 'react-awesome-reveal';

function Login() {
  const location = useLocation();
  const navigate = useNavigate(); // استخدام هوك للتنقل
  const isLoginPath = location.pathname === '/login';
  const [isLogin, setIsLogin] = useState(isLoginPath);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: 'Participant', // الدور الافتراضي
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.username || !formData.password || (!isLogin && !formData.email)) {
      Swal.fire({
        title: 'خطأ في التحقق',
        text: 'يرجى ملء جميع الحقول المطلوبة.',
        icon: 'error',
        confirmButtonText: 'موافق',
      });
      return false;
    }
    return true;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('https://straighthup.com/api/login/', {
        username: formData.username,
        password: formData.password,
      });
      console.log('تم تسجيل الدخول بنجاح:', response.data);
      Swal.fire({
        title: 'تم تسجيل الدخول بنجاح!',
        text: 'مرحبًا بعودتك!',
        icon: 'success',
        confirmButtonText: 'موافق',
      }).then(() => {
        navigate('/dashboard'); // قم بتعديل التوجيه حسب الحاجة
      });
    } catch (error) {
      console.error('خطأ في تسجيل الدخول:', error.response ? error.response.data : error.message);
      Swal.fire({
        title: 'فشل تسجيل الدخول!',
        
        text: error.response ? error.response.data.message : 'حدث خطأ أثناء تسجيل الدخول.',
        icon: 'error',
        confirmButtonText: 'موافق',
      });
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      role: formData.role,
    };

    try {
      const response = await axios.post('https://straighthup.com/api/signup/', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('تم التسجيل بنجاح:', response.data);
      Swal.fire({
        title: 'نجاح!',
        text: 'أنت الآن جزء من عائلة InnoNexus!',
        icon: 'success',
        confirmButtonText: 'موافق',
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      console.error('خطأ في التسجيل:', error.response ? error.response.data : 'حدث خطأ أثناء التسجيل.');
      Swal.fire({
        title: 'فشل التسجيل!',
        text: error.response ? error.response.data : 'حدث خطأ أثناء التسجيل.',
        icon: 'error',
        confirmButtonText: 'موافق',
      });
    }
  };

  return (
    <Slide>
      <div className="login-container d-flex flex-row ">
        <Slide direction='left'>
          <div className="image-section">
            <img src={image1} alt="عرض تسجيل الدخول" className="login-image" />
          </div>
        </Slide>
        <div className="login-content">
          <div className="form-section">
            <div className="form-header">
              <button
                className={isLogin ? 'form-toggle active' : 'form-toggle'}
                onClick={() => setIsLogin(true)}
              >
                تسجيل الدخول
              </button>
              <button
                className={!isLogin ? 'form-toggle active' : 'form-toggle'}
                onClick={() => setIsLogin(false)}
              >
                تسجيل جديد
              </button>
            </div>
            <div className="form-body">
              {isLogin ? (
                <Slide direction='right'>
                  <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="username" className="input-label">اسم المستخدم</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="أدخل اسم المستخدم"
                      className="styled-input"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="password" className="input-label">كلمة المرور</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="أدخل كلمة المرور"
                      className="styled-input"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <button type="submit" style={{backgroundColor:'#EFCC3D', color:'black'}} className="submit-button">تسجيل الدخول</button>
                  </form>
                </Slide>
              ) : (
                <Slide direction='right'>
                  <form onSubmit={handleSignupSubmit}>
                    <label htmlFor="email" className="input-label">البريد الإلكتروني</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="أدخل البريد الإلكتروني"
                      className="styled-input"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="username" className="input-label">اسم المستخدم</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="أدخل اسم المستخدم"
                      className="styled-input"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
       <label htmlFor="role" className="input-label">الدور</label>
<select
  id="role"
  name="role"
  className="styled-input"
  value={formData.role}
  onChange={handleInputChange}
>
  <option value="Participant">مشارك</option>
  <option value="Company">شركة</option>
  <option value="Mentor">موجه</option>
</select>

                    <label htmlFor="password" className="input-label">كلمة المرور</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="أدخل كلمة المرور"
                      className="styled-input"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <button type="submit" style={{backgroundColor:'#EFCC3D', color:'black'}} className="submit-button">تسجيل جديد</button>
                  </form>
                </Slide>
              )}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Login;
