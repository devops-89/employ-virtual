import InnerHeroSection from "@/components/widgets/inner-hero-section";
import React from "react";
import PrivacyPolicyintroduction from "./Introduction";
import ImportantInformation from "./Important-Information";
import InformationWeCollect from "./Information-We-Collect";
import HowwecollectpersonalData from "./How-we-collect-personal-data";
import SharingPersonalData from "./Sharing-personal-data";
import DataSecurity from "./Data-security";
import DataRetention from "./Data-retention";
import YourLegalRights from "./Your-legal-rights";
import Glossary from "./Glossary";

const PrivacyPolicyLayout = () => {
  return (
    <div>
      <InnerHeroSection heading="Privacy Policy" description="" />
      <PrivacyPolicyintroduction />
      <ImportantInformation />
      <InformationWeCollect />
      <HowwecollectpersonalData />
      <SharingPersonalData/>
      <DataSecurity/>
      <DataRetention/>
      <YourLegalRights/>
      <Glossary/>
    </div>
  );
};

export default PrivacyPolicyLayout;
