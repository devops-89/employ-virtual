import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import VirtualCard from "./components/virtual-card";
import { VIRTUAL_CARD_DATA } from "@/assets/generic-array";

const VirtualResourcing = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 40,
            fontFamily: poppins.style.fontFamily,
            fontWeight: 900,
          }}
        >
          Virtual Resourcing
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: poppins.style.fontFamily,
            fontWeight: 300,
            color: COLORS.TEXT_GREY,
          }}
        >
          The dedicated virtual employee you hire from employ virtual is only
          just a ping away. These resources makes working with your team as easy
          as being in the next cubicle, bridging the geographical distance and
          time zone difference.
        </Typography>

        <Grid container sx={{ mt: 6 }} spacing={4}>
          {VIRTUAL_CARD_DATA.map((val, i) => (
            <Grid size={3} key={i}>
              <VirtualCard
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

export default VirtualResourcing;
