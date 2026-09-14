"use client";
import lines from "@/banner/lines.png";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { X } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

const InnerHeroSection = ({
  heading = "",
  description = "",
  bgImage,
}: {
  heading?: string;
  description?: string;
  bgImage?: string | StaticImageData;
}) => {
  const headingLength = (heading || "").length;

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
        minHeight: { lg: "520px", md: "440px", sm: "380px", xs: "340px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: COLORS.DARK,
        left: 0,
        top: 0,
        position: "relative",
        py: { xs: 8, sm: 10, md: 12 },
        "::after": {
          content: '""',
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          background: `url(${lines.src})`,
          zIndex: 1,
          backgroundAttachment: "fixed",
          pointerEvents: "none",
        },
      }}
    >
      {bgImage ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <Image
            src={bgImage}
            alt={heading}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              zIndex: 1,
            }}
          />
        </Box>
      ) : (
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
          <Box
            component="video"
            src="https://employvirtual.com/wp-content/uploads/2019/01/video-3.mp4"
            muted
            autoPlay
            loop
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: { xs: "none", sm: "block" },
            }}
          />
        </Box>
      )}
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 }, position: "relative", zIndex: 3 }}>
        <Box
          sx={{
            width: { lg: "75%", md: "85%", xs: "100%" },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xl: headingLength > 35 ? 54 : 70,
                lg: headingLength > 35 ? 46 : 58,
                md: headingLength > 35 ? 38 : 46,
                sm: headingLength > 35 ? 30 : 38,
                xs: headingLength > 35 ? 24 : 30,
              },
              fontFamily: poppins.style.fontFamily,
              color: COLORS.WHITE,
              fontWeight: 900,
              textTransform: "capitalize",
              lineHeight: 1.25,
              wordBreak: "break-word",
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: 20, md: 18, sm: 16, xs: 14 },
              fontFamily: poppins.style.fontFamily,
              color: COLORS.WHITE,
              lineHeight: 1.6,
              fontWeight: 300,
              mt: { xs: 1.5, sm: 2 },
              width: { lg: "70%", md: "85%", xs: "100%" },
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: { xs: 20, sm: 32, md: 48 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 3,
            display: { lg: "block", xs: "none" },
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
  );
};

export default InnerHeroSection;
