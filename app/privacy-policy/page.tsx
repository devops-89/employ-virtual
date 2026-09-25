import PrivacyPolicyLayout from "@/components/layouts/privacyPolicyLayout";
import { getMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("/privacy-policy");

const PrivacyPolicy = () => {
  return (
    <div>
      <PrivacyPolicyLayout />
    </div>
  );
};

export default PrivacyPolicy;
