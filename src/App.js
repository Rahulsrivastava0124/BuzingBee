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
import Contact from "./Components/Contact.jsx";
import Objective from "./Components/Objective.jsx";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  let audio = new Audio("../src/assets/audios/clickSound.mp3")

  const start = () => {
    audio.play()
  }

  return (
    <div className="App cursor-[url(./assets/image/bee1.png),_auto] " onClick={start}>
      <Navbar />
      <Hero />
      <Services />
      <Objective/>
      <Testimonial/>
      <FeedBack/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
