import React from 'react';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Section2 from './Section2';
import Intro from './Intro';
import Section1 from './Section1'; 
import Section3 from './Section3'; 
import About from './About';
import Contact from './Contact';
import Footer from './Footer'; 
import bg from './assets/bg.jpg';

const App = () => {
  return (
    <div className="bg-contain bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${bg})` }}>

      <Navbar />
      <Section1 />
      <SignUp />
      <Intro />
      <Section2 />
      <Section3 />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
