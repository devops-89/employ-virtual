import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import banner_360 from "@/homepage/360-banner.jpg";
import image360 from "@/homepage/360-employ.jpg";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { fjalla, poppins } from "@/utils/fonts";
const Employ360 = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner_360.src})`,
        height: "100vh",
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
          <Grid container>
            <Grid size={6}>
              <Image
                src={image360}
                alt=""
                width={400}
                style={{ border: "10px solid #ffffff" }}
              />
            </Grid>
            <Grid size={6}>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: fjalla.style.fontFamily,
                  fontSize: 20,
                }}
              >
                360° VIRTUAL RESOURCING COMPANY
              </Typography>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: 28,
                  fontWeight: 800,
                  my: 2,
                }}
              >
                #EMPLOYVIRTUAL
              </Typography>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: 20,
                  fontWeight: 400,
                  my: 2,
                }}
              >
                Employ Virtual is a 360° virtual resourcing service provider,
                who help organizations save employee cost by more than 80%.
                Employ Virtual have hundreds of resources, who can be part of
                your integral team and work for you dedicatedly.
              </Typography>
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
                  p: 1.5,
                  mt: 4,
                  width: 150,
                }}
              >
                Know More
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Employ360;
