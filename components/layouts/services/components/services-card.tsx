import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import service1 from "@/services/services-icon/VIRTUAL-RESOURCING.png";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { SERVICE_CARD_PROPS } from "@/utils/types";
const ServicesCard = ({ img, heading, data }: SERVICE_CARD_PROPS) => {
  return (
    <Box>
      <Image src={img} alt="" width={80} />
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 800,
          fontFamily: poppins.style.fontFamily,
          mt: 2,
        }}
      >
        {heading}
      </Typography>
      <List>
        {data.map((val, i) => (
          <ListItemButton
            sx={{
              p: 0,
              width: "fit-content",
              ":hover": {
                color: COLORS.PRIMARY,
              },
            }}
            key={i}
          >
            <ListItemText
              primary={val.label}
              slotProps={{
                primary: {
                  fontFamily: poppins.style.fontFamily,
                  fontSize: 13,
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
      <Button
        sx={{
          fontSize: 12,
          fontFamily: poppins.style.fontFamily,
          color: COLORS.PRIMARY,
          ":hover": {
            textDecoration: "underline",
          },
        }}
      >
        View More
      </Button>
    </Box>
  );
};

export default ServicesCard;
