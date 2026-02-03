  import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import bannerGif from "@/banner/hero_banner.gif";
import { COLORS } from "@/utils/enum";
import { fjalla, impact, poppins } from "@/utils/fonts";
import { Facebook, X } from "@mui/icons-material";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import HeroCard from "./components/hero-card";
import { HERO_CARD_DATA } from "@/assets/generic-array";
import Link from "next/link";
const Herosection = () => {
  const socialIcons = [
    {
      icon: FaFacebookF,
    },
    {
      icon: X,
    },
    {
      icon: FaInstagram,
    },
    {
      icon: LiaLinkedinIn,
    },
  ];
  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, backgroundAttachment: "fixed" }}>
      <Box
        sx={{
          backgroundImage: `url(${bannerGif.src})`,
          minHeight: { lg: "100vh", md: "50vh", xs: "80vh" },
          pt: { xs: 20, sm: 18, lg: 0 },
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: { lg: "contain", xs: "cover" },
          backgroundPosition: "center",
          display: "flex",
          alignItems: { xs: "flex-start", lg: "center" },
          justifyContent: { xs: "flex-start", lg: "center" },
          position: "relative",
          backgroundAttachment: { lg: "fixed", xs: "scroll" },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 2.5, sm: 3, md: 2 },
          }}
        >
          <Grid container>
            <Grid size={{ lg: 10, md: 10, xs: 12 }} mx="auto">
              <Typography
                sx={{
                  fontSize: 13,
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.WHITE,
                  textAlign: "center",
                }}
              >
                Hiring dedicated remote resources will help you{" "}
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: 13,
                    fontFamily: poppins.style.fontFamily,
                    color: COLORS.PRIMARY,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  save your employee cost by more than 80%
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: 50, md: 40, xs: 26 },
                  color: COLORS.WHITE,
                  fontFamily: impact.style.fontFamily,
                  textAlign: "center",
                  px: { xs: 1, sm: 0 },
                }}
              >
                360° virtual resourcing services
              </Typography>
              <Grid container sx={{ my: 4 }}>
                <Grid size={{ lg: 6, xs: 12 }} margin="auto">
                  <Box sx={{ border: "1px solid  #ffffff" }}></Box>
                  <Typography
                    sx={{
                      my: 2,
                      color: COLORS.WHITE,
                      textAlign: "center",
                      fontFamily: poppins.style.fontFamily,
                      fontSize: 20,
                      fontWeight: 600,
                    }}
                  >
                    Start From Just
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontFamily: poppins.style.fontFamily,
                        color: COLORS.PRIMARY,
                        fontWeight: 600,
                      }}
                      component={"span"}
                    >
                      {" "}
                      $499*
                    </Typography>
                    /Month Only
                  </Typography>
                  <Box sx={{ border: "1px solid  #ffffff" }}></Box>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={{ xs: 2.5, sm: 3, lg: 4 }}
                mt={{ xs: 3, lg: 5 }}
              >
                {HERO_CARD_DATA.map((val, i) => (
                  <Grid size={{ lg: 4, md: 6, xs: 12 }} key={i}>
                    <HeroCard
                      img={val.img}
                      title={val.title}
                      description={val.description}
                    />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ textAlign: "center" }}>
                <Link href="/contact-us">
                  <Button
                    sx={{
                      backgroundColor: COLORS.TRANSPARENT,
                      border: `2px solid ${COLORS.WHITE}`,
                      borderRadius: 0,
                      p: { lg: 1.5, xs: 1 },
                      fontSize: { lg: 16, xs: 14 },
                      mt: { xs: 3, md: 4 },
                      fontFamily: poppins.style.fontFamily,
                      color: COLORS.WHITE,
                      ":hover": {
                        color: COLORS.PRIMARY,
                        backgroundColor: COLORS.BLACK,
                      },
                    }}
                  >
                    Schedule Meeting
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              position: "absolute",
              right: { lg: 30 },
              top: "30%",
              display: { lg: "flex", md: "flex", xs: "none" },
            }}
          >
            <Stack alignItems={"center"} spacing={3}>
              {socialIcons.map((val, i) => (
                <IconButton
                  key={i}
                  sx={{
                    "& svg": {
                      color: COLORS.WHITE,
                    },
                    ":hover": {
                      "& svg": {
                        color: COLORS.PRIMARY,
                      },
                    },
                  }}
                >
                  <val.icon />
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Herosection;
