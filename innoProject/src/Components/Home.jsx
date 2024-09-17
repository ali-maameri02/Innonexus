import React from 'react';
import '../'; // Add custom styles if necessary
import Header from './Header';
import Categories from './Categories';
import Learn from './Learn';
import About from './About';
import LearningSection from './Learnsection';
import Footer from './Footer';
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="home-page">
<Header/>

<Categories/>
<Learn/>
   <About/>
   <LearningSection/>
    </div>
  );
};

export default Home;