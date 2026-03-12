import React from "react";
import { Element } from "react-scroll";
import NewServices from "../Components/NewServices.jsx";
import Statistics from "../Components/Home/Statistics.jsx";

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
     
      <NewServices />
      <Statistics />
    </main>
  );
}
