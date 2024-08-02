import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Steps from './components/Steps';
import WhyTrovex from './components/WhyTrovex';
import FAQ from './components/FAQ';
import Card from './components/Card';
import Features from './components/Features';
import FooterPage from './components/FooterPage';




function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Dashboard />
      <Steps />
 
        <Features />
       
   
      <div className="card-container">
        <Card title="Encourage Mastery" />
        <Card title="Gain Actionable Insights" />
        <Card title="Inspire Growth" />
      </div>
      <WhyTrovex />
      <FAQ />
      <FooterPage />

    </div>
  );
}

export default App;
