import InnerHeroSection from "@/components/widgets/inner-hero-section";
import HowwecollectpersonalData from "./How-we-collect-personal-data";
import ImportantInformation from "./Important-Information";
import InformationWeCollect from "./Information-We-Collect";
import PrivacyPolicyintroduction from "./Introduction";

const privacyPolicyLayout = () => {
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

export default privacyPolicyLayout;
