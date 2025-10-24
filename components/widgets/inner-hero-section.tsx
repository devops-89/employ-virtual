import lines from "@/banner/lines.png";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import TextTrail from "./text-trail";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { X } from "@mui/icons-material";
import { LiaLinkedinIn } from "react-icons/lia";
const InnerHeroSection = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => {
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
      sx={{
        width: "100%",
        height: "600px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        background: COLORS.DARK,
        left: 0,
        top: 0,
        position: "relative",
        "::after": {
          content: '""',
          width: "100%",
          height: "100%",
          position: "absoulte",
          left: 0,
          top: 0,
          background: `url(${lines.src})`,
          zIndex: 1,
          backgroundAttachment: "fixed",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: COLORS.DARK,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          opacity: 0.1,
          mixBlendMode: "luminosity",
          backgroundAttachment: "fixed",
        }}
      >
        <video
          src="https://employvirtual.com/wp-content/uploads/2019/01/video-3.mp4"
          muted
          autoPlay
          loop
          style={{ width: "100%" }}
        ></video>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ position: "absolute", top: "25%", zIndex: 3, width: "50%" }}>
          {/* <GlitchText speed={1}>About us</GlitchText> */}
          {/* <TextTrail text="About Us" textColor="#ffffff" /> */}
          <Typography
            sx={{
              fontSize: 128,
              fontFamily: poppins.style.fontFamily,
              color: COLORS.WHITE,
              fontWeight: 900,
              textTransform: "capitalize",
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontSize: 26,
              fontFamily: poppins.style.fontFamily,
              color: COLORS.WHITE,
              //   fontWeight: 900,
              //   width: "60%",
              lineHeight: "40px",
              fontWeight: 300,
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", right: 30, top: "30%", zIndex: 3 }}>
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
  );
};

export default InnerHeroSection;
