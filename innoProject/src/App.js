import React from 'react';
import './App.css';
import Header from './Components/header';
import Introheader from './Components/introHeader';
import OurNumbers from './Components/ourNumbers';
import Partecepate from './Components/partecepate';
import ParticiGrps from './Components/particiGrps';
import Prev from './Components/prev';
import AreYouReady from './Components/areYouReady';
import ContactCard from './Components/ContactCard';
import Login from './Components/login';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <Introheader />
              <OurNumbers />
              <Partecepate />
              <ParticiGrps />
              <Prev />
              <AreYouReady />
              <ContactCard />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
