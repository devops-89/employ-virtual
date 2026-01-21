import InnerHeroSection from "@/components/widgets/inner-hero-section";
import React from "react";
import PrivacyPolicyintroduction from "./Introduction";
import ImportantInformation from "./Important-Information";
import InformationWeCollect from "./Information-We-Collect";
import HowwecollectpersonalData from "./How-we-collect-personal-data";

const PrivacyPolicyLayout = () => {
  return (
    <div>
      <InnerHeroSection heading="Privacy Policy" description="" />
      <PrivacyPolicyintroduction />
      <ImportantInformation />
      <InformationWeCollect />
      <HowwecollectpersonalData />
    </div>
  );
};

export default PrivacyPolicyLayout;
