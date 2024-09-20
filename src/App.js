import "./App.css";
import Hero from "./Components/Home/Hero.jsx";
import Navbar from "./Components/Home/Navbar.jsx";
import Services from "./Components/Services.jsx";
import Testimonial from "./Components/Testimonial.jsx";
import FeedBack from "./Components/FeedBack.jsx";
import Blog from "./Components/Home/Blog.jsx";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./Components/Portfolio.jsx";
import Footer from "./Components/Home/Footer.jsx";
import ReadyToWork from "./Components/Home/ReadyToWork.jsx";
import Statistics from './Components/Home/Statistics.jsx'
import NewServices from "./Components/NewServices.jsx";
import Contact from './Components/Home/Contact.jsx'
import ImageBanner from './Components/Home/ImageBanner.jsx'
import {ChatBubble} from "./Components/ChatBubble";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  // let audio = new Audio("../src/assets/audios/clickSound.mp3")

  // const start = () => {
  //   audio.play()
  // }

  return (
    <div className="App sm:cursor-[url(./assets/image/bee1.png),_auto] overflow-x-hidden">
        <ChatBubble/>
      <Navbar />
      <Hero />
      <Services />
      <NewServices/>
      <ImageBanner/>
      <Statistics/>
      {/*<Portfolio />*/}
      <Testimonial />
      <FeedBack />
      <Blog />
      <ReadyToWork />
      <Footer />
      <Contact/>
    </div>
  );
}

export default App;
