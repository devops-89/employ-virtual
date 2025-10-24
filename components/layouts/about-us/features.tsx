import { COLORS } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import FeaturesCard from "./components/features-card";
import { ABOUT_FEATURES_CARD_DATA } from "@/assets/generic-array";

const Features = () => {
  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: COLORS.DARK,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          {ABOUT_FEATURES_CARD_DATA.map((val, i) => (
            <Grid size={6} key={i}>
              <FeaturesCard heading={val.heading} data={val.data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
