"use client";
import { SERVICE_CARD_DATA } from "@/assets/generic-array";
import business from "@/services/businessman.jpg";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ServicesCard from "./components/services-card";
const BusinessWork = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
        <Grid
          container
          alignItems={"center"}
          direction={{ lg: "row", xs: "column-reverse" }}
          spacing={5}
        >
          <Grid size={{ lg: 6, xs: 12 }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 400, sm: 500 },
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Image
                src={business}
                alt="Business work"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              lg: "repeat(4, 1fr)",
              md: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              xs: "1fr",
            },
            gap: "60px",
            mt: { xs: 6, sm: 8, md: 10 },
          }}
        >
          {SERVICE_CARD_DATA.map((val, i) => (
            <ServicesCard
              key={i}
              img={val.img}
              heading={val.heading}
              data={val.data}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessWork;
