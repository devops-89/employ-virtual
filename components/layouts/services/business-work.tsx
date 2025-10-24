import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import business from "@/services/businessman.jpg";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import ServicesCard from "./components/services-card";
import { SERVICE_CARD_DATA } from "@/assets/generic-array";
const BusinessWork = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"} spacing={5}>
          <Grid size={6}>
            <Image
              src={business}
              alt=""
              style={{ width: "100%", height: 500, borderRadius: "20px" }}
            />
          </Grid>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 300,
                lineHeight: "30px",
              }}
            >
              Do you have a work which is completely computer based? Do the
              distance does not matter for your work? In that case you can
              employ virtually from us & let your business meet its best suited
              resources from an array of our services. We have resources who can
              complete any task from software development, product development,
              cloud and infra management, mobile app development, digital
              marketing, e-Com channel sales management, branding, designing,
              multimedia animation and many more. The resources we have are
              handpicked and trained skilled English-proficient professionals
              and can easily fit into the team of any corner in the world.
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 10 }} spacing={6}>
          {SERVICE_CARD_DATA.map((val, i) => (
            <Grid size={3} key={i}>
              <ServicesCard
                img={val.img}
                heading={val.heading}
                data={val.data}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BusinessWork;
