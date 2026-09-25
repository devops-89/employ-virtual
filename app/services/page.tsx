import ServicesLayout from "@/components/layouts/services";
import React from "react";
import { getMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("/services");

const Services = () => {
  return (
    <div>
      <ServicesLayout />
    </div>
  );
};

export default Services;
