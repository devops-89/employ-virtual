import { COLORS } from "@/utils/enum";
import { fjalla, poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import OfferCard from "./components/offer-card";
import { OFFER_CARD_DATA } from "@/assets/generic-array";

const Offer = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            fontSize: { lg: 50, xs: 30 },
            fontFamily: poppins.style.fontFamily,
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          We Offer
        </Typography>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: poppins.style.fontFamily,
            color: COLORS.TEXT_GREY,
            textAlign: "center",
          }}
        >
          Let your business meet its best suited resources from an array of our
          services.
        </Typography>
        <Grid container spacing={4} mt={4}>
          {OFFER_CARD_DATA.map((val, i) => (
            <Grid size={{ lg: 3, xs: 12 }} key={i}>
              <OfferCard
                img={val.img}
                heading={val.heading}
                description={val.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Offer;
