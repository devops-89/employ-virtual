import { COLORS } from "@/utils/enum";
import { fjalla, impact, poppins } from "@/utils/fonts";
import { BLOG_CARD_PROPS } from "@/utils/types";
import { ArrowForward, ArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const BlogCards = ({ img, title, description, slug }: BLOG_CARD_PROPS) => {
  return (
    <Box>
      <Card sx={{ height: 500 }}>
        <CardMedia component={"img"} src={img} height={250} />
        <CardContent>
          <Typography
            sx={{
              fontSize: 25,
              fontFamily: fjalla.style.fontFamily,
              lineHeight: "30px",
              mb: 2,
              textAlign: "justify",
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              fontFamily: poppins.style.fontFamily,
              textAlign: "justify",
            }}
          >
            {description.slice(0, 200) + "..."}
          </Typography>
          <Link href={`/blogs/${slug}`}>
            <Button
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor: COLORS.TRANSPARENT,
                color: COLORS.BLACK,
                fontFamily: poppins.style.fontFamily,
                mt: 1,
                "& .MuiButton-endIcon": {
                  transition: "transform 0.3s ease-in-out",
                },
                "&:hover .MuiButton-endIcon": {
                  transform: "translateX(5px)",
                },
              }}
            >
              Read More
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogCards;
