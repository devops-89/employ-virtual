import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import virtual from "@/about-icon/VIRTUAL-RESOURCING.png";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { OFFER_CARD_PROPS } from "@/utils/types";
const OfferCard = ({ img, heading, description }: OFFER_CARD_PROPS) => {
  return (
    <Box
      sx={{
        ":hover": {
          boxShadow: "0px 0px 2px 2px #eee",
        },
        p: 2,
        borderRadius: 2,
        transition: "0.5s ease all",
      }}
    >
      <Stack alignItems="flex-start" spacing={3}>
        <Image src={img} alt="" width={60} />
        <Typography
          sx={{
            fontSize: 16,
            fontFamily: poppins.style.fontFamily,
            fontWeight: 800,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            fontFamily: poppins.style.fontFamily,
            fontWeight: 300,
            color: COLORS.TEXT_BLACK,
          }}
        >
          {description}
        </Typography>

        <Button
          sx={{
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
            fontFamily: poppins.style.fontFamily,
            color: COLORS.PRIMARY,
            fontWeight: 800,
          }}
        >
          Read More
        </Button>
      </Stack>
    </Box>
  );
};

export default OfferCard;
