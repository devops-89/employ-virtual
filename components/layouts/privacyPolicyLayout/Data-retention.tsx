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
    <Box sx={{ mt: {xs: 3, md: 4} }}>
      <Container maxWidth="xl" sx={{px: { xs: 1, md: 3} }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {xs: 20, md: 24, lg: 28},
            fontFamily: poppins.style.fontFamily,
            mb: {xs: 2, md: 3},
          }}
        >
          6. DATA RETENTION
        </Typography>
        {data.map((val, i) => (
          <List
            key={i}
            sx={{
              pl: {xs: 2, md: 4},
              mb: {xs: 1.5, md: 2},
            }}
          >
            {val.description?.map((item, idx) => (
              <ListItem
                disablePadding
                sx={{
                  display: "list-item",
                  mb: {xs: 1, md: 1.5},
                }}
              >
                <Typography
                  key={idx}
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontSize: {xs: 14, md: 16},
                  }}
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