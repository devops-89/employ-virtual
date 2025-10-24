import { Box } from "@mui/material";
import React from "react";
import AboutHeroSection from "./about-hero-section";
import Skilled from "./skilled";
import Features from "./features";
import Offer from "./offer";
import BestSuited from "./best-suited";
import HiringRemoteStaff from "@/components/widgets/hiring-remote-staff";
import RestTakeCare from "./rest-take-care";
import Partners from "@/components/widgets/partners";

const AboutLayout = () => {
  return (
    <Box>
      <AboutHeroSection />
      <Skilled />
      <Features />
      <Offer />
      <BestSuited />
      <HiringRemoteStaff />
      <RestTakeCare />
      <Partners />
    </Box>
  );
};

export default AboutLayout;
