import React from "react";
import areyou from '../assets/Sandy illustrations_business vol.2_24.png';
// import dev from '../assets/360_F_478083183_6CQZKaiML4lyTBKOx450KCRkU0aExkVH-removebg-preview.png';
import dev from '../assets/Sandy illustrations_business vol.2_30.png';
import dev2 from '../assets/360_F_478083183_6CQZKaiML4lyTBKOx450KCRkU0aExkVH-removebg-preview.png';
import dev3 from '../assets/360_F_478083183_6CQZKaiML4lyTBKOx450KCRkU0aExkVH-removebg-preview.png';
import dev4 from '../assets/360_F_478083183_6CQZKaiML4lyTBKOx450KCRkU0aExkVH-removebg-preview.png';
import '../index.css';
import { Slide } from "react-awesome-reveal";
const Aboutus = () => {
  const categories = [
    {
      title: 'ابتكارات تقنية',
      items: [
        'حلول الذكاء الاصطناعي: تطوير خوارزميات وتقنيات ذكاء اصطناعي متقدمة.',
        'تقنيات الواقع المعزز: تطبيقات مبتكرة للواقع المعزز في مختلف الصناعات.',
        'الأمن السيبراني: أدوات وتقنيات لحماية البيانات وتعزيز الأمان الرقمي.',
        'تحليل البيانات الكبيرة: حلول متقدمة لتحليل البيانات وتحويلها إلى رؤى قيمة.',
        'إنترنت الأشياء (IoT): تطوير أجهزة وخدمات متصلة لزيادة الكفاءة والابتكار.',
        'التعلم الآلي (Machine Learning): تقنيات ونماذج لتطوير وتطبيق تعلم الآلة.'
      ]
    },
    {
      title: 'مشاريع تحوّل رقمي',
      items: [
        'أتمتة العمليات: أدوات لتحسين كفاءة الأعمال من خلال الأتمتة.',
        'تحسين تجربة العملاء: تطبيقات وخدمات لتحسين التفاعل وتجربة العملاء.',
        'التجارة الإلكترونية: حلول لتحسين تجربة التسوق وزيادة المبيعات عبر الإنترنت.',
        'الخدمات اللوجستية الرقمية: حلول لتحسين إدارة عمليات اللوجستيات.'
      ]
    },
    {
      title: 'ابتكارات منتجات',
      items: [
        'تطوير براءات اختراع: مشاريع جديدة لتطوير براءات اختراع مبتكرة.',
        'تصميم منتجات جديدة: أفكار لمنتجات مبتكرة تلبي احتياجات السوق.',
        'تحسين المنتجات الحالية: تحديثات وتحسينات لمنتجات قائمة لتحسين أدائها.',
        'أجهزة تكنولوجيا متقدمة: تطوير أجهزة تكنولوجية جديدة ومتطورة.'
      ]
    },
    {
      title: 'خدمات فريدة',
      items: [
        'استشارات التحول الرقمي: خدمات استشارية لتحسين استراتيجيات الرقمنة.',
        'تدريب وتطوير: برامج تدريبية متخصصة لتطوير المهارات الرقمية.',
        'دعم فني واستشاري: خدمات دعم فني وتقني لمساعدة الشركات.',
        'إدارة المشاريع الرقمية: أدوات وخدمات لإدارة وتنفيذ المشاريع الرقمية بفعالية.',
        'تحليل السوق: دراسات وتحليلات للسوق والاتجاهات الحالية.',
        'إدارة العلاقات مع العملاء (CRM): أدوات واستراتيجيات لإدارة وتحسين علاقات العملاء.'
      ]
    },
    {
      title: 'المبادرات التعاونية',
      items: [
        'شراكات استراتيجية: فرص للتعاون مع شركات ومؤسسات رائدة.',
        'برامج تسريع المشاريع: مبادرات لدعم وتسريع نمو المشاريع الناشئة.',
        'مختبرات ابتكار: مساحات تجريبية لتطوير الأفكار والابتكارات الجديدة.',
        'تبادل المعرفة: مبادرات لتبادل الخبرات والأفكار بين المتخصصين.'
      ]
    }
  ];

  return (
    <div className="Learn-section">
        
      <div className="title">
        <Slide direction="right">
        <h1>لديك ما تقدمه؟</h1></Slide>
        <Slide direction="right" delay={200}>

        <p className="lead">
          هنا، تجد منصة مفتوحة لجميع الأفكار والخبرات والابتكارات، سواء كانت فكرة بسيطة أو مشروعًا ضخمًا. نقدم لك مجموعة متنوعة من المجالات.
        </p></Slide>
      </div>
      <div className="background-header m-0">
        <img src={areyou} width={'500'} alt="are you" />
      </div>
      <section className="py-5 pt-0">
        <div className="container text-center">
          <div className="d-flex flex-row flex-wrap justify-content-between ">
            {categories.map((category, index) => (
                              <Slide direction="up"  className="col-lg-5  col-md-6 col-sm-12 bg-white "  key={index} style={{margin:'2rem 1rem', height:'80vh'}}>

                <div className=" border-0 shadow-sm pb-5 h-100 bg-white" >
                  <div className="card-body d-flex flex-column align-items-center p-3 bg-white">
                    <img src={dev} alt="" width={'200'} height={'200'} className="mb-3 bg-white" />
                    <h5 className="card-title bg-white">{category.title}</h5>
                    <ul className="card-text text-right flex-grow-1 bg-white" style={{ padding: "0", listStyleType: "none" }}>
                      {category.items.map((item, idx) => (
                        <li key={idx} className="bg-white">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
