import React from 'react';
import '../styles/homeStyle.css';
import Activity from '../component2/act/cards/activity';
import Navbar from '../component2/navbar/navbar';
import Hero from '../component2/hero-section/hero-section';
import Footer from '../component2/footers/Footer';
import About from '../component2/aboutUs/about';
import { FloatButton } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from '../component2/eventCount/event';

export default function home() {
  return (
    <div style={{ backgroundColor: 'snow' }}>
      <Navbar />
      <Hero />
      <About />
      <FloatButton.BackTop
        style={{
          backgroundColor: '#ed068c',
          color: 'white',
          borderRadius: '50%',
          fontSize: '20px'
        }}
      />
      <Activity />
      <Event />
      <Footer />
    </div>
  );
}
