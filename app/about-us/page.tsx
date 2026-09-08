import AboutLayout from "@/components/layouts/about-us";
import { Box } from "@mui/material";
import React from "react";
import { pageMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageMetadata["/about-us"].title,
  description: pageMetadata["/about-us"].description,
};

const AboutUs = () => {
  return (
    <Box>
      <AboutLayout />
    </Box>
  );
};

export default AboutUs;
