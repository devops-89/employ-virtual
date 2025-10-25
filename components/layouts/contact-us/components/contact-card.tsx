import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { ADDRESS_TYPE } from "@/utils/types";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { GiIndiaGate } from "react-icons/gi";

const ContactCard = ({
  country,
  streetAddress,
  addressLine1,
  addressLine2,
  phoneNumber,
  email,
  img,
}: ADDRESS_TYPE) => {
  return (
    <Box>
      <Stack direction={"row"} alignItems={"center"} spacing={2} sx={{ mb: 2 }}>
        <Image
          src={img}
          alt=""
          width={30}
          height={20}
          style={{ border: "1px solid #eee " }}
        />
        <Typography
          sx={{
            fontSize: 16,
            fontFamily: poppins.style.fontFamily,
            fontWeight: 800,
          }}
        >
          {country}
        </Typography>
      </Stack>
      <Typography
        sx={{
          fontSize: 15,
          fontFamily: poppins.style.fontFamily,
          fontWeight: 400,
        }}
      >
        {streetAddress}
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          fontFamily: poppins.style.fontFamily,
          fontWeight: 400,
        }}
      >
        {addressLine1}
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          fontFamily: poppins.style.fontFamily,
          fontWeight: 400,
        }}
      >
        {addressLine2}
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          fontFamily: poppins.style.fontFamily,
          fontWeight: 400,
        }}
      >
        Phone:{phoneNumber}
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          fontFamily: poppins.style.fontFamily,
          fontWeight: 400,
          textDecoration: "none",
          color: COLORS.BLACK,
        }}
        component={"a"}
        href={`mailto:${email}`}
      >
        Email: {email}
      </Typography>
    </Box>
  );
};

export default ContactCard;
