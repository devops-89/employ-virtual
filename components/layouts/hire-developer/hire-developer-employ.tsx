import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import hire from "@/hire/java-developer.jpg";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { useDetailsStore } from "@/store/useDetailsStore";
import developer from "@/hire/software-developer.png";
const HireDeveloperEmploy = () => {
  const { details } = useDetailsStore();

  //   console.log("test", details);
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems={"center"}>
          <Grid size={6}>
            <Image
              src={details?.img || developer}
              alt={details?.heading || "developer image"}
              style={{
                width: "100%",
                height: 500,
                objectFit: "cover",
                borderRadius: 20,
              }}
            />
          </Grid>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 800,
                fontFamily: poppins.style.fontFamily,
                mb: 1,
              }}
            >
              {details?.heading}
            </Typography>
            {details?.description.map((val: { label: string }, i: number) => (
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: poppins.style.fontFamily,
                  mb: 2,
                }}
                key={i}
              >
                {val.label}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HireDeveloperEmploy;
