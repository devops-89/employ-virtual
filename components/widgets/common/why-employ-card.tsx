import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { WHY_EMPLOY_PROPS } from "@/utils/types";
const WhyEmployCard = ({
  img,
  title,
  description,
  color,
}: WHY_EMPLOY_PROPS) => {
  return (
    <Box sx={{}}>
      <Image src={img} alt="" width={70} />
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 800,
          fontFamily: poppins.style.fontFamily,
          mb: "20px",
          color: color,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          fontFamily: poppins.style.fontFamily,
          lineHeight: "22px",
          color: color,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default WhyEmployCard;
