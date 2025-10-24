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
              fontSize: 50,
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
              fontSize: 20,
              fontWeight: 300,
              mt: 1,
              textAlign: "center",
            }}
          >
            was never this easy. Choose your team in four simple steps.
          </Typography>
          <Grid container spacing={5} sx={{ mt: 4 }}>
            {REMOTE_CARD_DATA.map((val, i) => (
              <Grid size={3} key={i}>
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
