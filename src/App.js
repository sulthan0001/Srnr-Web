import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import HomePage from '../src/pages/HomePage';
import AboutPage from '../src/pages/AboutPage';
import ServicePage from '../src/pages/ServicePage';
import FaqPage from '../src/pages/FaqPage';
import CareerPage from '../src/pages/CareerPage';
import BlogPage from '../src/pages/BlogPage';
import ContactPage from '../src/pages/ContactPage'
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/sevices" element={<ServicePage/>}/>
        <Route exact path="/faq's" element={<FaqPage/>}/>
        <Route exact path="/careers" element={<CareerPage/>}/>
        <Route exact path="/blog's" element={<BlogPage/>}/>
        <Route exact path="/contactus" element={<ContactPage/>}/>
        <Route exact path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route exact path="/termsandcondition" element={<Terms/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
