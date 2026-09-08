import BlogsLayout from "@/components/layouts/blogs";
import { Box } from "@mui/material";
import React from "react";
import { pageMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageMetadata["/blogs"].title,
  description: pageMetadata["/blogs"].description,
};

const Blogs = () => {
  return (
    <Box>
      <BlogsLayout />
    </Box>
  );
};

export default Blogs;
