import { Box, Button, Typography } from "@mui/material";
import React from "react";
import hire from "@/about-icon/HIRE-SOFTWARE-DEVELOPERS.png";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { VIRTUAL_CARD_PROPS } from "@/utils/types";
const VirtualCard = ({ heading, description }: VIRTUAL_CARD_PROPS) => {
  return (
    <Box>
      <Image src={hire} alt="" width={100} />
      <Typography
        sx={{ mt: 2, fontFamily: poppins.style.fontFamily, fontWeight: 700 }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          mt: 2,
          fontFamily: poppins.style.fontFamily,
          fontWeight: 500,
          fontSize: 15,
        }}
      >
        {description}
      </Typography>
      <Button
        sx={{
          fontSize: 14,
          fontFamily: poppins.style.fontFamily,
          mt: 2,
          color: COLORS.PRIMARY,
          fontWeight: 550,
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: -4,
            height: "3px",
            width: "0%",
            backgroundColor: COLORS.PRIMARY,
            transition: "width 0.4s ease-in-out",
          },
          "&:hover::after": {
            width: "100%",
          },
        }}
      >
        Read More
      </Button>
    </Box>
  );
};

export default VirtualCard;
