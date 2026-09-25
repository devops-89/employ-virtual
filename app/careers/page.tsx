import CareersLayout from "@/components/layouts/careers-layout";
import { Box } from "@mui/material";
import React from "react";
import { getMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("/careers");

const Careers = () => {
  return (
    <Box>
      <CareersLayout />
    </Box>
  );
};

export default Careers;
