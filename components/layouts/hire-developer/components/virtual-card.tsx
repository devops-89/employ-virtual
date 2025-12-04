import { Box, Button, Typography } from "@mui/material";
import React from "react";
import hire from "@/about-icon/HIRE-SOFTWARE-DEVELOPERS.png";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { VIRTUAL_CARD_PROPS } from "@/utils/types";
import Link from "next/link";
const VirtualCard = ({
  heading,
  description,
  slug,
  img,
}: VIRTUAL_CARD_PROPS) => {
  return (
    <Box>
      {img && (

      <Image src={img} alt="" width={100} />
      )}
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
      <Link href={`/${slug}`}>
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
      </Link>
    </Box>
  );
};

export default VirtualCard;
