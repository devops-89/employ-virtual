"use client";
import InnerHeroSection from "@/components/widgets/inner-hero-section";
import { Box } from "@mui/material";
import React from "react";
import { BLOG_DETAIL_DATA } from "@/assets/blog-details";
import BlogContent from "./components/blog-content";

const BlogDetailsLayout = ({ blog }: { blog: BLOG_DETAIL_DATA }) => {
  return (
    <Box>
      <InnerHeroSection
        bgImage={blog.img}
      />
      <BlogContent blog={blog} />
    </Box>
  );
};

export default BlogDetailsLayout;
