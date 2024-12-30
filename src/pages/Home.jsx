import React from "react";
import NavSection from "../ui/NavSection";
import Footer from "../ui/FooterSection";
import VideoSection from "../ui/VideoSection";
import GreetingSection from "../ui/GreetingSection";
import VisiMisiSection from "../ui/VisiMisiSection";
import ExtracurricularSection from "../ui/ExtracurricularSection";
import CountingSection from "../ui/CountingSection";

const Home = () => {
  return (
    <div>
      <NavSection />
      <VideoSection />
      <GreetingSection />
      <VisiMisiSection />
      <ExtracurricularSection />
      <CountingSection />
      <Footer />
    </div>
  );
};

export default Home;