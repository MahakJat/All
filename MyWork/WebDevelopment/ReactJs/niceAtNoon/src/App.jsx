import React from "react";
import "./index.css";
import Navbar from "./componenets/Navbar";
import Section1 from "./componenets/Section1";
import Section2 from "./componenets/Section2";
import Section3 from "./componenets/Section3";
import Section4 from "./componenets/Section4";
import Section5 from "./componenets/Section5";
import Section6 from "./componenets/Section6";
import Section7 from "./componenets/Section7";
import Section8 from "./componenets/Section8";
import Section9 from "./componenets/Section9";
import Footer from "./componenets/footer";
  
const App = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2/>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6/>
      <Section7 />
      <Section8 />
      <Section9/>
      <Footer/>
    </div>
  );
};

export default App;
