"use client";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { SERVICE_CARD_PROPS } from "@/utils/types";
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Collapse,
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
        {data.slice(0, 3).map((val, i) => (
          <ListItemButton
            key={i}
            sx={{
              p: 0,
              width: "fit-content",
              ":hover": { color: COLORS.PRIMARY },
            }}
            onClick={() => navigateToPage(val.url || "#")}
           
          
          >
            <ListItemText
              primary={val.label}
              slotProps={{
                primary: { fontFamily: poppins.style.fontFamily, fontSize: 13 },
              }}
            />
          </ListItemButton>
        ))}

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {data.slice(3).map((val, i) => (
            <ListItemButton
              key={i + 3}
              sx={{
                p: 0,
                width: "fit-content",
                ":hover": { color: COLORS.PRIMARY },
              }}
                onClick={() => navigateToPage(val.url || "#")}
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
        </Collapse>
      </List>

      <Button
        sx={{
          fontSize: 12,
          fontFamily: poppins.style.fontFamily,
          color: COLORS.PRIMARY,
          ":hover": { textDecoration: "underline" },
        }}
        onClick={toggleExpand}
      >
        {expanded ? "View Less" : "View More"}
      </Button>
    </Box>
  );
};

export default ServicesCard;
