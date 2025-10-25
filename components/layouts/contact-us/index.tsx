import InnerHeroSection from "@/components/widgets/inner-hero-section";
import { Box } from "@mui/material";
import React from "react";
import Contact from "./contact";
import ManagementSuited from "@/components/widgets/management-provide-card";
import { BEST_SUITED_CARD, TAKE_CARE_CARD_DATA } from "@/assets/generic-array";
import HiringRemoteStaff from "@/components/widgets/hiring-remote-staff";
import Partners from "@/components/widgets/partners";

const ContactLayout = () => {
  return (
    <div>
      <InnerHeroSection
        heading="Contact Us"
        description="Worldwide locations and an international culture shape our global footprint."
      />
      <Box sx={{ py: 5 }}>
        <Contact />
      </Box>
      <ManagementSuited
        heading="CHOOSE BEST SUITED"
        CARD_DATA={BEST_SUITED_CARD}
        description="The managers and management make sure that your employees are 100% dedicated & productive."
        isButton={false}
      />
      <HiringRemoteStaff />
      <ManagementSuited
        heading="& REST WE WILL TAKE CARE"
        CARD_DATA={TAKE_CARE_CARD_DATA}
        description="The managers and management make sure that your employees are 100% dedicated & productive."
        isButton={true}
      />
      <Partners />
    </div>
  );
};

export default ContactLayout;
