import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import resource1 from "@/banner/talent.png";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { HERO_CARD_PROPS } from "@/utils/types";
const HeroCard = ({ img, title, description }: HERO_CARD_PROPS) => {
  return (
    <Box>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Image src={img} alt="" width={70} />
        <Box sx={{ color: COLORS.WHITE }}>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              fontFamily: poppins.style.fontFamily,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 500,
              mt: 1,
              fontFamily: poppins.style.fontFamily,
           
            }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default HeroCard;
