import footer_banner from "@/banner/hero_banner.gif";
import logo from "@/logo/employ_virtual_logo.png";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import FooterLinks from "./footerLinks";
import { FOOTER_LINKS_URL } from "../../assets/generic-array";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { X } from "@mui/icons-material";
import { LiaLinkedinIn } from "react-icons/lia";
const Footer = () => {
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
    <Box
      sx={{ backgroundColor: COLORS.BLACK, height: { lg: "80vh", xs: "70vh" } }}
    >
      <Box
        sx={{
          backgroundImage: `url(${footer_banner.src})`,
          height: { lg: "80vh", xs: "70vh" },
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "contain",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ lg: 0, xs: 4 }}>
            <Grid
              size={{ lg: 4, xs: 12 }}
              sx={{
                borderRight: { lg: "1px solid #ffffff", xs: "none" },
                pr: { lg: 4, xs: 0 },
              }}
            >
              <Image src={logo} alt="" width={250} />
              <Typography
                sx={{
                  fontSize: 15,
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.WHITE,
                  mt: 2,
                }}
              >
                Employ Virtual is a 360° virtual resourcing service provider,
                who help organisations save employees cost more than 80%, by
                providing state-of-the-art model of Workforce as a Services
                (WaaS).
              </Typography>
            </Grid>
            {FOOTER_LINKS_URL.map((val, i) => (
              <Grid
                size={{ lg: 4, xs: 6 }}
                key={i}
                sx={{
                  borderRight:
                    FOOTER_LINKS_URL.length - 1 !== i
                      ? "1px solid #ffffff"
                      : "",
                }}
              >
                <FooterLinks heading={val.heading} data={val.data} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "85%",
              transform: "translateX(-50%)",
              left: "50%",
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={3}
            >
              {socialIcons.map((val, i) => (
                <IconButton
                  key={i}
                  sx={{
                    "& svg": {
                      color: COLORS.WHITE,
                      width: 25,
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
            <Typography
              sx={{
                textAlign: "center",
                color: "#989496",
                fontSize: 13,
                fontFamily: poppins.style.fontFamily,
                mt: 1,
              }}
            >
              © Copyright 2025 Digixito Media Pvt. Ltd & Infraguard Inc. All
              rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
