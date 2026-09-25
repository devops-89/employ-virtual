"use client";
import React from "react";
import { Box, Button, Container, Typography, Stack } from "@mui/material";
import Link from "next/link";
import { COLORS } from "@/utils/enum";
import { impact, poppins } from "@/utils/fonts";
import bannerGif from "@/banner/hero_banner.gif";

export default function NotFound() {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundImage: `url(${bannerGif.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        py: { xs: 10, md: 15 },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 80, sm: 120, md: 160 },
            fontFamily: impact.style.fontFamily,
            color: COLORS.PRIMARY,
            lineHeight: 1,
            mb: 2,
            letterSpacing: 4,
          }}
        >
          404
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontSize: { xs: 24, sm: 32, md: 40 },
            fontFamily: impact.style.fontFamily,
            color: COLORS.WHITE,
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16, md: 18 },
            fontFamily: poppins.style.fontFamily,
            color: "#A0A0A0",
            maxWidth: 550,
            mx: "auto",
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2.5}
          justifyContent="center"
          alignItems="center"
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.BLACK,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: 15,
                px: 4,
                py: 1.5,
                borderRadius: 0,
                textTransform: "uppercase",
                ":hover": {
                  backgroundColor: COLORS.WHITE,
                  color: COLORS.BLACK,
                },
              }}
            >
              Back to Home
            </Button>
          </Link>

          <Link href="/contact-us" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                backgroundColor: COLORS.TRANSPARENT,
                color: COLORS.WHITE,
                border: `2px solid ${COLORS.WHITE}`,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: 15,
                px: 4,
                py: 1.5,
                borderRadius: 0,
                textTransform: "uppercase",
                ":hover": {
                  borderColor: COLORS.PRIMARY,
                  color: COLORS.PRIMARY,
                },
              }}
            >
              Contact Support
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
