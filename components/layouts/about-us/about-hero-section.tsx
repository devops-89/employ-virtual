import { COLORS } from "@/utils/enum";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import lines from "@/banner/lines.png";
import InnerHeroSection from "@/components/widgets/inner-hero-section";
const AboutHeroSection = () => {
  return (
    <Box>
      <Box sx={{ backgroundAttachment: "fixed" }}>
        <InnerHeroSection
          heading="About us"
          description="Employ Virtual is a 360° virtual resourcing service provider, who help organisations save employees cost more than 80%."
        />
      </Box>
    </Box>
  );
};

export default AboutHeroSection;
