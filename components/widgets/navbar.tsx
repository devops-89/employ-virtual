"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import logo from "@/logo/employ_virtual_logo.png";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { fjalla } from "@/utils/fonts";
import { Close, DragHandle } from "@mui/icons-material";
import { NAVBAR_LINKS } from "@/assets/generic-array";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState<"none" | "in" | "out">("none");

  const handleOpen = () => {
    setSlide("in");
    setTimeout(() => {
      setOpen(true);
      setSlide("out");
      setTimeout(() => {
        setSlide("none");
      }, 600);
    }, 600);
  };

  const handleClose = () => {
    setSlide("in");
    setTimeout(() => {
      setOpen(false);
      setSlide("out");
      setTimeout(() => {
        setSlide("none");
      }, 600);
    }, 600);
  };

  const handleClick = async () => {
    setSlide("in");
    setTimeout(() => {
      setOpen(false);
      setSlide("out");
      setTimeout(() => {
        setSlide("none");
      }, 600);
    }, 600);
  };

  const phone = useMediaQuery("(max-width:600px)");

  return (
    <Container maxWidth="xl">
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{ position: "absolute", width: "100%", top: 20, zIndex: 9999 }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link href="/" onClick={handleClick}>
              <Image src={logo} alt="logo" width={phone ? 150 : 250} />
            </Link>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontSize: 18,
                  fontFamily: fjalla.style.fontFamily,
                }}
              >
                Menu
              </Typography>
              <IconButton
                sx={{
                  border: `1px solid ${COLORS.WHITE}`,
                  backgroundColor: open ? COLORS.WHITE : COLORS.TRANSPARENT,
                  ":hover": {
                    backgroundColor: open ? COLORS.WHITE : COLORS.TRANSPARENT,
                  },
                }}
                onClick={open ? handleClose : handleOpen}
              >
                {open ? (
                  <Close sx={{ color: COLORS.BLACK }} />
                ) : (
                  <DragHandle sx={{ color: COLORS.WHITE }} />
                )}
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {slide !== "none" && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100%",
            backgroundColor: COLORS.PRIMARY,
            zIndex: 2000,
            animation:
              slide === "in"
                ? "slideIn 0.6s ease-in-out forwards"
                : "slideOut 0.6s ease-in-out forwards",
          }}
        />
      )}

      <Drawer
        open={open}
        onClose={handleClose}
        anchor="left"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            backgroundColor: COLORS.BLACK,
            // top: 80,
            transition: "transform 0.4s ease-in-out",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          // "& .MuiBackdrop-root": {
          //   top: 80,
          // },
          // top: 80,
          zIndex: 1500,
        }}
      >
        <Container>
          <Stack alignItems={"center"} justifyContent="center" spacing={2}>
            {NAVBAR_LINKS.map((val, i) => (
              <Link
                href={val.url}
                key={i}
                style={{ textDecoration: "none", position: "relative" }}
                onClick={handleClick}
              >
                <Typography
                  sx={{
                    color: COLORS.WHITE,
                    fontSize: 40,
                    fontFamily: fjalla.style.fontFamily,
                    position: "relative",
                    display: "inline-block",
                    cursor: "pointer",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      height: "3px",
                      width: "0%",
                      backgroundColor: COLORS.PRIMARY,
                      transition: "width 0.4s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                    fontWeight: 800,
                    ":hover": {
                      color: COLORS.PRIMARY,
                    },
                  }}
                >
                  {val.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Container>
      </Drawer>

      <style jsx global>{`
        @keyframes slideIn {
          0% {
            width: 0%;
            left: 0;
          }
          100% {
            width: 100%;
            left: 0;
          }
        }

        @keyframes slideOut {
          0% {
            width: 100%;
            left: 0;
          }
          100% {
            width: 0%;
            left: 100%;
          }
        }
      `}</style>
    </Container>
  );
};

export default Navbar;
