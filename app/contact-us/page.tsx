import ContactLayout from "@/components/layouts/contact-us";
import { Box } from "@mui/material";
import React from "react";
import { pageMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageMetadata["/contact-us"].title,
  description: pageMetadata["/contact-us"].description,
};

const ContactUs = () => {
  return (
    <Box>
      <ContactLayout />
    </Box>
  );
};

export default ContactUs;
