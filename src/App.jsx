import React from 'react';
import Navbar from './Navbar'; // Adjust the path if needed
import Section2 from './Section2';
import Intro from './Intro';
import Section1 from './Section1'; 
import Section3 from './Section3'; 
import Contact from './Contact';
import Footer from './Footer'; // Adjust the path if needed




const App = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Intro />
      <Section2 />
      <Section3 />
      <Contact />
      <Footer />

    </div>
  );
};

export default App;
