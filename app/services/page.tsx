import ServicesLayout from "@/components/layouts/services";
import React from "react";
import { pageMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageMetadata["/services"].title,
  description: pageMetadata["/services"].description,
};

const Services = () => {
  return (
    <div>
      <ServicesLayout />
    </div>
  );
};

export default Services;
