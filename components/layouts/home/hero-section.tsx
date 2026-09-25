import { HERO_CARD_DATA } from "@/assets/generic-array";
import bannerGif from "@/banner/hero_banner.gif";
import { COLORS } from "@/utils/enum";
import { impact, poppins } from "@/utils/fonts";
import { X } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import HeroCard from "./components/hero-card";
const Herosection = () => {
  const socialIcons = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/employvirtual/",
    },
    {
      name: "X",
      icon: X,
      url: "https://x.com/employvirtual",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/employvirtual/",
    },
    {
      name: "LinkedIn",
      icon: LiaLinkedinIn,
      url: "https://www.linkedin.com/company/employ-virtual/posts/?feedView=all",
    },
  ];
  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, backgroundAttachment: "fixed" }}>
      <Box
        sx={{
          backgroundImage: `url(${bannerGif.src})`,
          minHeight: "100vh",
          height: "auto",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "contain",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundAttachment: "fixed",
          pt: { xs: 9, sm: 11, md: 12 },
          pb: { xs: 5, sm: 6, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={{ lg: 10, xs: 12 }} margin="auto">
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 13 },
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.WHITE,
                  textAlign: "center",
                  px: 1,
                  lineHeight: 1.5,
                }}
              >
                Hiring dedicated remote resources will help you{" "}
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: { xs: 12, sm: 13 },
                    fontFamily: poppins.style.fontFamily,
                    color: COLORS.PRIMARY,
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  save your employee cost by more than 80%
                </Typography>
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontSize: { lg: 50, md: 42, sm: 34, xs: 26 },
                  color: COLORS.WHITE,
                  fontFamily: impact.style.fontFamily,
                  textAlign: "center",
                  mt: 1.5,
                  mb: 2.5,
                  lineHeight: 1.2,
                }}
              >
                360° virtual resourcing services
              </Typography>

              <Grid container sx={{ my: { xs: 3, sm: 4 } }}>
                <Grid size={{ xs: 11, sm: 8, md: 6 }} margin="auto">
                  <Box sx={{ border: "1px solid  #ffffff" }}></Box>
                  <Typography
                    sx={{
                      my: 1.5,
                      color: COLORS.WHITE,
                      textAlign: "center",
                      fontFamily: poppins.style.fontFamily,
                      fontSize: { xs: 16, sm: 20 },
                      fontWeight: 600,
                    }}
                  >
                    Start From Just
                    <Typography
                      sx={{
                        fontSize: { xs: 18, sm: 20 },
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

              <Grid container spacing={{ xs: 2.5, sm: 4, md: 5 }}>
                {HERO_CARD_DATA.map((val, i) => (
                  <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }} key={i}>
                    <HeroCard
                      img={val.img}
                      title={val.title}
                      description={val.description}
                    />
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ textAlign: "center", mt: { xs: 3.5, sm: 4 } }}>
                <Link href="/contact-us">
                  <Button
                    sx={{
                      backgroundColor: COLORS.TRANSPARENT,
                      border: `2px solid ${COLORS.WHITE}`,
                      borderRadius: 0,
                      p: 1.5,
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
              right: 30,
              top: "30%",
              display: { lg: "flex", xs: "none" },
            }}
          >
            <Stack alignItems={"center"} spacing={3}>
              {socialIcons.map((val, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={val.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={val.name}
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
