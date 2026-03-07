import React from "react";
import { Element } from "react-scroll";
import NewServices from "../Components/NewServices.jsx";
import Statistics from "../Components/Home/Statistics.jsx";

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Element id="services" name="services">
        <section className="pt-20">
          <h1 className="text-5xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto px-4">
            Comprehensive Digital Marketing Automation Solutions. From AI Agents
            to Paid Ads, we deliver intelligent solutions that drive results.
          </p>
        </section>
      </Element>
      <NewServices />
      <Statistics />
    </main>
  );
}
