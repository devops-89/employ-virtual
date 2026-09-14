"use client";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { SERVICE_CARD_PROPS } from "@/utils/types";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ServicesCard = ({ img, heading, data }: SERVICE_CARD_PROPS) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  const router = useRouter();

  const navigateToPage = (slug: string) => {
    router.push(`/${slug}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: { xs: 2.5, sm: 3 },
        borderRadius: 3,
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.05)",
        border: "1px solid #f0f0f0",
        backgroundColor: "#ffffff",
        height: "100%",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
        <Image src={img} alt={heading} width={80} style={{ height: "auto" }} />
      </Box>

      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 800,
          fontFamily: poppins.style.fontFamily,
          mt: 1,
          mb: 1.5,
          color: COLORS.TEXT_BLACK,
          textAlign: "center",
        }}
      >
        {heading}
      </Typography>

      <List
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 0,
        }}
      >
        {data.slice(0, 3).map((val, i) => (
          <ListItemButton
            key={i}
            sx={{
              p: 0.5,
              width: "auto",
              textAlign: "center",
              justifyContent: "center",
              ":hover": {
                color: COLORS.PRIMARY,
                backgroundColor: "transparent",
              },
            }}
            onClick={() => navigateToPage(val.url || "#")}
          >
            <ListItemText
              primary={val.label}
              slotProps={{
                primary: {
                  fontFamily: poppins.style.fontFamily,
                  fontSize: 13,
                  textAlign: "center",
                },
              }}
            />
          </ListItemButton>
        ))}

        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {data.slice(3).map((val, i) => (
              <ListItemButton
                key={i + 3}
                sx={{
                  p: 0.5,
                  width: "auto",
                  textAlign: "center",
                  justifyContent: "center",
                  ":hover": {
                    color: COLORS.PRIMARY,
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => navigateToPage(val.url || "#")}
              >
                <ListItemText
                  primary={val.label}
                  slotProps={{
                    primary: {
                      fontFamily: poppins.style.fontFamily,
                      fontSize: 13,
                      textAlign: "center",
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </Box>
        </Collapse>
      </List>

      <Button
        sx={{
          fontSize: 12,
          fontFamily: poppins.style.fontFamily,
          color: COLORS.PRIMARY,
          fontWeight: 700,
          mt: "auto",
          pt: 1.5,
          ":hover": {
            textDecoration: "underline",
            backgroundColor: "transparent",
          },
        }}
        onClick={toggleExpand}
      >
        {expanded ? "VIEW LESS" : "VIEW MORE"}
      </Button>
    </Box>
  );
};

export default ServicesCard;
