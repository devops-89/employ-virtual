import InnerHeroSection from "@/components/widgets/inner-hero-section";
import { Box } from "@mui/material";
import React from "react";
import BusinessWork from "./business-work";
import ManagementSuited from "@/components/widgets/management-provide-card";
import { BEST_SUITED_CARD, TAKE_CARE_CARD_DATA } from "@/assets/generic-array";
import HiringRemoteStaff from "@/components/widgets/hiring-remote-staff";
import Partners from "@/components/widgets/partners";

const ServicesLayout = () => {
  return (
    <Box sx={{}}>
      <InnerHeroSection
        heading="Services"
        description="Get your perfect employee with world’s largest global marketplace for virtual staffing services and save 80% on your employee cost."
      />
      <Box sx={{ py: 5 }}>
        <BusinessWork />
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

export default ServicesLayout;
  