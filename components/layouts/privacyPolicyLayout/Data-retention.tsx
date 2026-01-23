import { poppins } from "@/utils/fonts";
import { Box, Typography, Container,ListItem, List} from "@mui/material";
import React from "react";

const DataRetention = () => {
  const data = [
    {
      description: [
        {
          label:
            "We store information for as long as required to meet the purposes for which you gave it, including the fulfillment of any legal, accounting, or reporting requirements, the resolution of disputes, the enforcement of agreements, and other purposes allowed by applicable law.",
        },
      ],
    },
  ];
  return (
    <Box sx={{ mt: 4 }}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 24,
            fontFamily: poppins.style.fontFamily,
          }}
        >
          6. DATA RETENTION
        </Typography>
        {data.map((val, i) => (
          <List key={i}>
            {val.description?.map((item, idx) => (
              <ListItem
                disablePadding
                sx={{
                  display: "list-item",
                }}
              >
                <Typography
                  key={idx}
                  sx={{ fontFamily: poppins.style.fontFamily }}
                >
                  {item.label}
                </Typography>
              </ListItem>
            ))}
          </List>
        ))}
      </Container>
    </Box>
  );
};

export default DataRetention;
