import React from "react";
import NavSection from "../ui/NavSection";
import Footer from "../ui/FooterSection";
import VideoSection from "../ui/home/VideoSection";
import GreetingSection from "../ui/home/GreetingSection";
import VisiMisiSection from "../ui/home/VisiMisiSection";
import ExtracurricularSection from "../ui/home/ExtracurricularSection";
import CountingSection from "../ui/home/CountingSection";
import BeritaSection from "../ui/home/BeritaSection";

const Home = () => {
  return (
    <div>
      <NavSection />
      <VideoSection />
      <GreetingSection />
      <VisiMisiSection />
      <ExtracurricularSection />
      <CountingSection />
      <BeritaSection />
      <Footer />
    </div>
  );
};

export default Home;