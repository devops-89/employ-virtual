"use client";
import banner_360 from "@/homepage/360-banner.jpg";
import image360 from "@/homepage/360-employ.jpg";
import { COLORS } from "@/utils/enum";
import { fjalla, poppins } from "@/utils/fonts";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const Employ360 = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner_360.src})`,
        minHeight: { md: "100vh", xs: "auto" },
        height: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#00000090",
          minHeight: { md: "100vh", xs: "auto" },
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
            <Grid size={{ lg: 6, md: 6, xs: 12 }}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: 340, sm: 400 },
                  border: "10px solid #ffffff",
                  boxSizing: "border-box",
                  mx: "auto",
                }}
              >
                <Image
                  src={image360}
                  alt="360 employ"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </Box>
            </Grid>
            <Grid size={{ lg: 6, md: 6, xs: 12 }}>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: fjalla.style.fontFamily,
                  fontSize: { xs: 16, sm: 20 },
                  letterSpacing: "0.5px",
                }}
              >
                360° VIRTUAL RESOURCING COMPANY
              </Typography>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { xs: 22, sm: 28 },
                  fontWeight: 800,
                  my: { xs: 1, sm: 2 },
                }}
              >
                #EMPLOYVIRTUAL
              </Typography>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { xs: 14, sm: 17, md: 18 },
                  fontWeight: 400,
                  lineHeight: { xs: 1.6, sm: 1.7 },
                  my: { xs: 1.5, sm: 2 },
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
                    py: 1.2,
                    px: 3,
                    mt: { xs: 2, sm: 3 },
                    width: 150,
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
