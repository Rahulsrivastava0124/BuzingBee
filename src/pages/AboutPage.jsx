import React from "react";
import { Element } from "react-scroll";
import FeedBack from "../Components/FeedBack.jsx";
import Testimonial from "../Components/Testimonial.jsx";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Element id="feedback" name="feedback">
        <section className="pt-20 px-4">
          <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            BuzingBee is the leading AI-powered marketing automation platform.
            We help businesses automate their digital marketing workflows, from
            email campaigns to lead scoring, using intelligent AI agents. Scale
            your marketing without scaling your team.
          </p>
        </section>
      </Element>
      <FeedBack />
      <Testimonial />
    </main>
  );
}
