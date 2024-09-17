import React from 'react';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Login from './Components/login';
import Aboutus from './Components/About_us';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Move Router to wrap the whole App */}
      <div>
        <NavBar />
        <main style={{ marginTop: '4rem', padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/Aboutus" element={<Aboutus />} />
          </Routes>
        </main>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
