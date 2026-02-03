import { REMOTE_CARD_DATA } from "@/assets/generic-array";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WhyEmployCard from "./common/why-employ-card";

const HiringRemoteStaff = () => {
  return (
    <div>
      <Box sx={{ py: 5 }}>
        <Container maxWidth="xl">
          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontSize: { lg: 50, md: 40, xs: 28 },
              fontWeight: 900,
              textAlign: "center",
              color: COLORS.TEXT_BLACK,
            }}
          >
            HIRING REMOTE STAFF
          </Typography>
          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              color: COLORS.TEXT_GREY,
              fontSize: { lg: 20, md: 18, xs: 16 },
              fontWeight: 300,
              mt: 1,
              textAlign: "center",
            }}
          >
            was never this easy. Choose your team in four simple steps.
          </Typography>
          <Grid container spacing={{ lg: 5, xs: 3 }} sx={{ mt: 4 }}>
            {REMOTE_CARD_DATA.map((val, i) => (
              <Grid size={{ lg: 3, md: 6, xs: 12 }} key={i}>
                <WhyEmployCard
                  img={val.img}
                  title={val.title}
                  description={val.description}
                  color={val.color}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default HiringRemoteStaff;
