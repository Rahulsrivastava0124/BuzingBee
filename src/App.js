import "./App.css";
import Hero from "./Components/Home/Hero.jsx";
import Navbar from "./Components/Home/Navbar.jsx";
import Services from "./Components/Services.jsx";
import Testimonial from './Components/Testimonial.jsx'
import FeedBack from './Components/FeedBack.jsx'
import Blog from './Components/Home/Blog.jsx'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App cursor-[url(./assets/image/bee1.png),_auto] ">
      <Navbar />
      <Hero />
      <Services />
      <Testimonial/>
      <FeedBack/>
      <Blog/>
    </div>
  );
}

export default App;
