import { BEST_SUITED_CARD } from "@/assets/generic-array";
import ManagementSuited from "@/components/widgets/management-provide-card";
import React from "react";

const BestSuited = () => {
  return (
    <div>
      <ManagementSuited
        CARD_DATA={BEST_SUITED_CARD}
        heading="CHOOSE BEST SUITED"
        description="The managers and management make sure that your employees are 100% dedicated & productive."
        isButton={false}
      />
    </div>
  );
};

export default BestSuited;
