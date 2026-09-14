import InnerHeroSection from "@/components/widgets/inner-hero-section";
import BlogList from "./components/blog-list";
import { Box } from "@mui/material";
import React from "react";

const BlogsLayout = () => {
  return (
    <Box>
      <InnerHeroSection
        heading="Blog"
        description="Employ Virtual is a 360° virtual resourcing service provider, who help organisations save employees cost more than 80%."
      />
      <BlogList />
    </Box>
  );
};

export default BlogsLayout;
