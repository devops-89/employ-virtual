import BlogsLayout from "@/components/layouts/blogs";
import { Box } from "@mui/material";
import React from "react";
import { getMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("/blogs");

const Blogs = () => {
  return (
    <Box>
      <BlogsLayout />
    </Box>
  );
};

export default Blogs;
