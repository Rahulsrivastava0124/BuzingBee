import React from "react";
import { Element } from "react-scroll";
import Contact from "../Components/Home/Contact.jsx";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Element id="contact" name="contact">
        <section className="pt-20 px-4">
          <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ready to automate your marketing? Get in touch with our team today
            and let's build intelligent workflows for your business.
          </p>
        </section>
      </Element>
      <Contact />
    </main>
  );
}
