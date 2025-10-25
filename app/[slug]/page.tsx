"use client";
import { HIRE_DEVELOPER_DATA } from "@/assets/generic-array";
import HireDeveloperLayout from "@/components/layouts/hire-developer";
import { useDetailsStore } from "@/store/useDetailsStore";
import { COLORS } from "@/utils/enum";
import { DETAILS_DATA } from "@/utils/types";
import { Backdrop, Box } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";

const HiringDeveloper = () => {
  const { slug } = useParams();

  const { details, setDetails } = useDetailsStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const newDetails = HIRE_DEVELOPER_DATA.find((e) => e.slug === slug);
    if (newDetails) {
      setTimeout(() => {
        setDetails(newDetails as DETAILS_DATA);
        setLoading(false);
      }, 3000);
    }
  }, [slug, setDetails]);

  return (
    <Box>
      <Backdrop
        open={loading}
        sx={{
          zIndex: 999,
          backgroundColor: "#00000050",
          backdropFilter: "blur(10px)",
        }}
      >
        <Atom color={COLORS.PRIMARY} size="medium" text="" textColor="" />
      </Backdrop>

      <HireDeveloperLayout />
    </Box>
  );
};

export default HiringDeveloper;
