import React from "react";
import '../index.css'
import dev from '../assets/360_F_478083183_6CQZKaiML4lyTBKOx450KCRkU0aExkVH-removebg-preview.png';
import { Fade, Slide } from "react-awesome-reveal";
const Categories = () => {
    return(
      
        <section className="categories-section py-5">
                <Fade direction="up">

        <div className="container text-center">
          <h2>Where to begin?</h2>
          <p>Browse your topics or choose one of the categories below.</p>
          <div className="category-buttons mt-4 mb-5">
            <button className="btn btn-warning mx-2">Popular</button>
            <button className="btn btn-light mx-2">Development</button>
            <button className="btn btn-light mx-2">Design</button>
            <button className="btn btn-light mx-2">Business</button>
            <button className="btn btn-light mx-2">Personal</button>
          </div>

          <div className="row">
            {/* Category Cards */}
            {[
              'Web Development', 'UI & UX Design', 'Language Learning', 
              'Self Esteem', 'Marketing', 'Data Analysis', 'Robotics', 'Biochemistry'
            ].map((category, index) => (
              <Slide direction="up"  className="col-lg-3 col-md-6 mb-4">
              <div key={index} >
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-2">
                    <img src={dev} alt=""  width={'200'} height={'90'}/>
                    <h5 className="card-title">{category}</h5>
                    <p className="card-text">Learn more about {category.toLowerCase()}.</p>
                  </div>
                </div>
              </div></Slide>
            ))}
          </div>
        </div></Fade>
      </section>
    )
    ;
};
export default Categories