import React from "react";
import '../index.css'
import dev from '../assets/360_F_478083183_6CQZKaiML4lyTBKOx450KCRkU0aExkVH-removebg-preview.png';
import { Fade, Slide } from "react-awesome-reveal";
const Categories = () => {
    return(
      
        <section className="categories-section py-5">

        <div className="container text-center">
          <Slide direction="up">
          <h2>من أين تبدأ؟</h2>
          <p>تصفح موضوعاتك أو اختر إحدى الفئات أدناه.</p>

          </Slide>
       
          <div className="category-buttons mt-4 mb-5">
    <button className="btn btn-warning mx-2">شائع</button>
    <button className="btn btn-light mx-2">تطوير</button>
    <button className="btn btn-light mx-2">تصميم</button>
    <button className="btn btn-light mx-2">أعمال</button>
    <button className="btn btn-light mx-2">شخصي</button>
</div>

<div className="row">
    {/* Category Cards */}
    {[
      'تطوير الويب', 'تصميم واجهة المستخدم وتجربة المستخدم', 'تعلم اللغات', 
      'تقدير الذات', 'التسويق', 'تحليل البيانات', 'الروبوتات', 'الكيمياء الحيوية'
    ].map((category, index) => (
      <Slide direction="up" className="col-lg-3 col-md-6 mb-4">
        <div key={index}>
          <div className="card border-0 shadow-sm">
            <div className="card-body p-2 bg-white">
              <img src={dev} alt="" width={'200'} height={'90'} className="bg-white" />
              <h5 className="card-title bg-white  "  style={{textAlign:'left'}}>{category}</h5>
              <p className="card-text bg-white" style={{textAlign:'left'}}>تعلم المزيد عن {category}.</p>
            </div>
          </div>
        </div>
      </Slide>
    ))}
</div>

        </div>
      </section>
    )
    ;
};
export default Categories