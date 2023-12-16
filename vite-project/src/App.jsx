import "./App.css";
import { useState } from "react";
import Hero from "./Component/Hero";
import Blogsection from "./Component/Blogsection";
import Aboutus from "./Component/Aboutus";
import Testemony from "./Component/Testemony";
import Map from "./Component/Map";
import Footer from "./Component/Footer";
import Chatbot from "./Component/Chatbot";


function App() {

  return (
    <div className="bg-overalbg font-poppins">
      <Hero />
      <Blogsection />
      <Aboutus />
      <Map />
      <Testemony />
      {/* <Chatbot /> */}
      <Footer />
    </div>
  );
}

export default App;
