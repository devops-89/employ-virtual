"use client";
import React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { BLOG_PROPS } from "@/utils/types";
import { ArrowForward } from "@mui/icons-material";

const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  category,
  slug,
  img,
}: BLOG_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        borderRadius: { xs: 2.5, sm: 3 },
        overflow: "hidden",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.05)",
        border: "1px solid #eaeaea",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "all 0.35s ease-in-out",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0px 14px 32px rgba(0, 0, 0, 0.12)",
          borderColor: COLORS.PRIMARY,
          "& .blog-img": {
            transform: "scale(1.06)",
          },
          "& .read-more-text": {
            color: COLORS.TEXT_BLACK,
          },
          "& .read-more-icon": {
            transform: "translateX(4px)",
            color: COLORS.PRIMARY,
          },
        },
      }}
    >
      {/* Thumbnail Container */}
      <Link href={`/blogs/${slug}`} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 190, sm: 210, md: 220 },
            overflow: "hidden",
            backgroundColor: COLORS.BLACK,
          }}
        >
          {img ? (
            <Image
              src={img}
              alt={title}
              fill
              className="blog-img"
              style={{
                objectFit: "cover",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          ) : (
            <Box
              className="blog-img"
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(135deg, ${COLORS.BLACK} 0%, #2b2b2b 100%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: 15, sm: 18 },
                  opacity: 0.8,
                }}
              >
                THUMBNAIL
              </Typography>
            </Box>
          )}

          {/* Category Chip */}
          <Chip
            label={category}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              maxWidth: "calc(100% - 24px)",
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.BLACK,
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: 10, sm: 11 },
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              px: 0.5,
              boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
            }}
          />
        </Box>
      </Link>

      {/* Card Content */}
      <Box
        sx={{
          p: { xs: 2.5, sm: 3 },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* Meta details */}
        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          spacing={1}
          sx={{ mb: 1.5, color: COLORS.TEXT_GREY }}
        >
          <Typography
            sx={{
              fontSize: { xs: 11, sm: 12 },
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
            }}
          >
            {date}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 11, sm: 12 },
              fontFamily: poppins.style.fontFamily,
            }}
          >
            •
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 11, sm: 12 },
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
            }}
          >
            {readTime}
          </Typography>
        </Stack>

        {/* Title */}
        <Link href={`/blogs/${slug}`} style={{ textDecoration: "none" }}>
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: 16, sm: 17, md: 18 },
              fontWeight: 700,
              fontFamily: poppins.style.fontFamily,
              color: COLORS.TEXT_BLACK,
              lineHeight: 1.35,
              mb: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              transition: "color 0.2s ease-in-out",
              "&:hover": {
                color: COLORS.PRIMARY,
              },
            }}
          >
            {title}
          </Typography>
        </Link>

        {/* Excerpt */}
        <Typography
          sx={{
            fontSize: { xs: 13, sm: 14 },
            fontFamily: poppins.style.fontFamily,
            color: COLORS.TEXT_GREY,
            lineHeight: 1.6,
            mb: 2.5,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            flexGrow: 1,
          }}
        >
          {excerpt}
        </Typography>

        {/* Read More Link */}
        <Box sx={{ pt: 1.5, borderTop: "1px solid #f2f2f2", mt: "auto" }}>
          <Link
            href={`/blogs/${slug}`}
            style={{ textDecoration: "none", display: "inline-block", width: "100%" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ cursor: "pointer", py: 0.5 }}
            >
              <Typography
                className="read-more-text"
                sx={{
                  fontSize: { xs: 12, sm: 13 },
                  fontWeight: 700,
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.TEXT_BLACK,
                  transition: "color 0.2s ease-in-out",
                }}
              >
                Read Article
              </Typography>
              <ArrowForward
                className="read-more-icon"
                sx={{
                  fontSize: { xs: 14, sm: 16 },
                  color: COLORS.TEXT_BLACK,
                  transition:
                    "transform 0.25s ease-in-out, color 0.25s ease-in-out",
                }}
              />
            </Stack>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
