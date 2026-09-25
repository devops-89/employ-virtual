import ContactLayout from "@/components/layouts/contact-us";
import { Box } from "@mui/material";
import React from "react";
import { getMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("/contact-us");

const ContactUs = () => {
  return (
    <Box>
      <ContactLayout />
    </Box>
  );
};

export default ContactUs;
