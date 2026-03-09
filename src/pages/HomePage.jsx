import React from "react";
import Hero from "../Components/Home/Hero.jsx";
import Services from "../Components/Services.jsx";
import NewServices from "../Components/NewServices.jsx";
import ImageBanner from "../Components/Home/ImageBanner.jsx";
import Statistics from "../Components/Home/Statistics.jsx";
import Testimonial from "../Components/Testimonial.jsx";
import FeedBack from "../Components/FeedBack.jsx";
import Blog from "../Components/Home/Blog.jsx";
import ReadyToWork from "../Components/Home/ReadyToWork.jsx";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <NewServices />
      <ImageBanner />
      <Statistics />
      <Testimonial />
      <FeedBack />
      <Blog limit={3} />
      <ReadyToWork />
    </main>
  );
}
