import InnerHeroSection from "@/components/widgets/inner-hero-section";
import { COLORS } from "@/utils/enum";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Introduction from "./Introduction";

const TermsOfuseLayout = () => {
  return (
    <div>
      <InnerHeroSection heading="Terms of Use" description="" />
      <Introduction />
    </div>
  );
};

export default TermsOfuseLayout;
