import { Box, Container, Grid } from "@mui/material";
import React from "react";
import PartnerCard from "./common/partner-card";
import { PARTNER_DATA } from "@/assets/generic-array";

const Partners = () => {
  return (
    <Box sx={{ pb: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {PARTNER_DATA.map((val, i) => (
            <Grid size={{ lg: 1.7, xs: 12 }} key={i}>
              <PartnerCard img={val.img} name={val.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Partners;
