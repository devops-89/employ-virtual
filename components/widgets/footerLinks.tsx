import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { FOOTER_LINKS } from "@/utils/types";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const FooterLinks = ({ heading, data }: FOOTER_LINKS) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 800,
          fontFamily: poppins.style.fontFamily,
          textAlign: "center",
          color: COLORS.WHITE,
        }}
      >
        {heading}
      </Typography>
      <List>
        {data.map((val, i) => (
          <ListItemButton
            sx={{
              padding: 0,
              width: "fit-content",
              margin: "auto",
              ":hover": {
                color: COLORS.PRIMARY,
                ".text": {
                  color: COLORS.PRIMARY,
                },
              },
            }}
            key={i}
          >
            <ListItemText
              primary={
                <Typography
                  sx={{
                    color: COLORS.WHITE,
                    fontFamily: poppins.style.fontFamily,
                    fontSize: 13,
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                  className="text"
                >
                  {val.label}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default FooterLinks;
