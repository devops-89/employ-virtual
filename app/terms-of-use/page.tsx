import TermsOfuseLayout from "@/components/layouts/Terms-of-use";
import React from "react";
import { getMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("/terms-of-use");

const TermsofUse = () => {
  return (
    <div>
      <TermsOfuseLayout />
    </div>
  );
};

export default TermsofUse;
