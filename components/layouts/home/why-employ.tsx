import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WhyEmployCard from "../../widgets/common/why-employ-card";
import { WHY_EMPLOY_DATA } from "@/assets/generic-array";

const WhyEmploy = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, py: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={7}>
          <Grid size={{ lg: 4, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 50, xs: 30 },
                fontFamily: poppins.style.fontFamily,
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              WHY EMPLOY VIRTUAL?
            </Typography>
            <Typography
              sx={{
                fontSize: 17,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.TEXT_GREY,
                fontWeight: 300,
                lineHeight: "30px",
              }}
            >
              The dedicated virtual employee you hire from employ virtual is
              only just a ping away. The resources might be working remotely but
              you get the real experience.
            </Typography>
          </Grid>
          <Grid size={{ lg: 8, xs: 12 }}>
            <Grid container spacing={7}>
              {WHY_EMPLOY_DATA.map((val, i) => (
                <Grid size={{ lg: 4, xs: 12 }} key={i}>
                  <WhyEmployCard
                    img={val.img}
                    title={val.title}
                    description={val.description}
                    color={val.color}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyEmploy;
