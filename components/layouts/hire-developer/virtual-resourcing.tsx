import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import VirtualCard from "./components/virtual-card";
import { VIRTUAL_CARD_DATA } from "@/assets/generic-array";
import { useDetailsStore } from "@/store/useDetailsStore";
import { StaticImageData } from "next/image";

const VirtualResourcing = () => {
  const { details } = useDetailsStore();
  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { lg: 40, xs: 25 },
            fontFamily: poppins.style.fontFamily,
            fontWeight: 900,
          }}
        >
          {details?.services.heading}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { lg: 20, xs: 18 },
            fontFamily: poppins.style.fontFamily,
            fontWeight: 300,
            color: COLORS.TEXT_GREY,
          }}
        >
          {details?.services.description}
        </Typography>

        <Grid container sx={{ mt: 6 }} spacing={4}>
          {details?.services.data.map(
            (
              val: { heading: string; description: string; slug: string,img:StaticImageData },
              i: number
            ) => (
              <Grid size={{ lg: 3, xs: 12 }} key={i}>
                <VirtualCard
                  heading={val.heading}
                  description={val.description}
                  slug={val.slug}
                  img={ val.img}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default VirtualResourcing;
