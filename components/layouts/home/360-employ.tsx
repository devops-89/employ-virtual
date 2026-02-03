"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import banner_360 from "@/homepage/360-banner.jpg";
import image360 from "@/homepage/360-employ.jpg";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { fjalla, poppins } from "@/utils/fonts";
import Link from "next/link";
const Employ360 = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner_360.src})`,
        height: { lg: "100vh", md: "100vh", xs: "auto" },
        py: { xs: 6, md: 0 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#00000090",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid
              size={{ lg: 6, md: 6, xs: 12 }}
              sx={{ textAlign: { xs: "center", md: "center", lg: "left" } }}
            >
              <Image
                src={image360}
                alt=""
                width={phone ? 280 : 400}
                style={{ border: "10px solid #ffffff" }}
              />
            </Grid>
            <Grid size={{ lg: 6, xs: 12 }}>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: fjalla.style.fontFamily,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  textAlign: { xs: "center", md: "center", lg: "left" },
                }}
              >
                360° VIRTUAL RESOURCING COMPANY
              </Typography>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { xs: 22, md: 26, lg: 28 },
                  fontWeight: 800,
                  my: 2,
                  textAlign: { xs: "center", md: "center", lg: "left" },
                }}
              >
                #EMPLOYVIRTUAL
              </Typography>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { xs: 15, md: 17, lg: 20 },
                  fontWeight: 400,
                  my: 2,
                  textAlign: { xs: "center", md: "center", lg: "left" },
                }}
              >
                Employ Virtual is a 360° virtual resourcing service provider,
                who help organizations save employee cost by more than 80%.
                Employ Virtual have hundreds of resources, who can be part of
                your integral team and work for you dedicatedly.
              </Typography>
              <Link href="/about-us">
                <Button
                  sx={{
                    border: "2px solid #ffffff",
                    borderRadius: 0,
                    color: COLORS.WHITE,
                    ":hover": {
                      color: COLORS.PRIMARY,
                      backgroundColor: COLORS.BLACK,
                    },
                    backgroundColor: COLORS.TRANSPARENT,
                    fontFamily: poppins.style.fontFamily,
                    p: { xs: 1, md: 1.3, lg: 1.5 },
                    mt: 4,
                    width: { xs: "100%", md: 160, lg: 150 },
                    mx: { xs: "auto", md: 0 },
                  }}
                >
                  Know More
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Employ360;
