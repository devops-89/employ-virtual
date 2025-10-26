import InnerHeroSection from "@/components/widgets/inner-hero-section";
import { Box } from "@mui/material";
import React from "react";
import HireDeveloperEmploy from "./hire-developer-employ";
import WhyHireEmploy from "./why-hire-employ";
import VirtualResourcing from "./virtual-resourcing";
import ManagementSuited from "@/components/widgets/management-provide-card";
import { BEST_SUITED_CARD, TAKE_CARE_CARD_DATA } from "@/assets/generic-array";
import HiringRemoteStaff from "@/components/widgets/hiring-remote-staff";
import Partners from "@/components/widgets/partners";
import { useDetailsStore } from "@/store/useDetailsStore";

const HireDeveloperLayout = () => {
  const { details } = useDetailsStore();

  console.log("data", details);
  return (
    <Box>
      <InnerHeroSection
        heading={details?.bannerHeading}
        description={details?.bannerDescription}
      />
      <Box sx={{ py: 5 }}>
        <HireDeveloperEmploy />
      </Box>
      <Box sx={{ py: 5 }}>
        <WhyHireEmploy />
      </Box>
      <Box sx={{ py: 5 }}>
        <VirtualResourcing />
      </Box>
      <Box>
        <ManagementSuited
          heading="CHOOSE BEST SUITED"
          description="The managers and management make sure that your employees are 100% dedicated & productive."
          CARD_DATA={BEST_SUITED_CARD}
          isButton={false}
        />
      </Box>
      <Box>
        <HiringRemoteStaff />
      </Box>
      <Box>
        <ManagementSuited
          heading="& REST WE WILL TAKE CARE"
          description="The managers and management make sure that your employees are 100% dedicated & productive."
          CARD_DATA={TAKE_CARE_CARD_DATA}
          isButton={true}
        />
      </Box>
      <Box>
        <Partners />
      </Box>
    </Box>
  );
};

export default HireDeveloperLayout;
