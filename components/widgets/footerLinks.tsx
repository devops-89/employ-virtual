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
import Link from "next/link";
import React from "react";

const FooterLinks = ({ heading, data }: FOOTER_LINKS) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: {lg: 20, md: 18, xs: 16},
          fontWeight: 800,
          fontFamily: poppins.style.fontFamily,
          textAlign: {lg: "center", md: "center", xs: "center"},
          color: COLORS.WHITE,
        }}
      >
        {heading}
      </Typography>
      <List sx={{mt:{xs: 1,md: 5}}}>
        {data.map((val, i) => (
          <Link href={val.url || ""} style={{ textDecoration: "none" }} key={i}>
            <ListItemButton
              sx={{
                padding: 0,
                width: {md: "fit-content", xs:"100%"},
                justifyContent:"center",
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
                      fontSize: {lg: 13, md: 13, xs:12},
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
          </Link>
          
        ))}
      </List>
    </Box>
  );
};

export default FooterLinks;
