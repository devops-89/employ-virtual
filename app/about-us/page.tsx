import AboutLayout from "@/components/layouts/about-us";
import { Box } from "@mui/material";
import React from "react";
import { getMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("/about-us");

const AboutUs = () => {
  return (
    <Box>
      <AboutLayout />
    </Box>
  );
};

export default AboutUs;
