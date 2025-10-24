import { TAKE_CARE_CARD_DATA } from "@/assets/generic-array";
import ManagementSuited from "@/components/widgets/management-provide-card";
import { Box } from "@mui/material";
import React from "react";

const RestTakeCare = () => {
  return (
    <Box sx={{}}>
      <ManagementSuited
        heading="& REST WE WILL TAKE CARE"
        description="The managers and management make sure that your employees are 100% dedicated & productive."
        CARD_DATA={TAKE_CARE_CARD_DATA}
        isButton={true}
      />
    </Box>
  );
};

export default RestTakeCare;
