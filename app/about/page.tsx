import type { Metadata } from "next";
import {
  AboutCTA,
  AboutHero,
  MissionVision,
  OurStory,
  TeamSection,
  Timeline,
  WhyUs,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About BuzingBee — Story, Mission, Team & Process",
  description:
    "Explore BuzingBee's story, mission, team, and modern process for building digital products, performance marketing systems, and AI-first growth solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <TeamSection />
      <WhyUs />
      <Timeline />
      <AboutCTA />
    </>
  );
}
