"use client";
import { BLOGS_DATA } from "@/assets/blogs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BLOG_DATA_PROPS } from "@/utils/types";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { fjalla, impact, poppins } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";

const BlogDetailsLayout = () => {
  const { slug } = useParams();

  console.log("params", slug);

  const [blogData, setBlogData] = useState<BLOG_DATA_PROPS | null>(null);

  useEffect(() => {
    const filterData = BLOGS_DATA.find((val) => val.slug === slug);

    console.log("filterData", filterData);
    setBlogData(filterData || null);
  }, [slug]);

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${blogData?.img})`,
          height: "70vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.40)",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        ></Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Container maxWidth="xl">
          <Typography
            sx={{
              color: COLORS.BLACK,
              fontFamily: fjalla.style.fontFamily,
              fontSize: { lg: 40, xs: 30 },
              //   width: "50%",
              fontWeight: 600,
            }}
          >
            {blogData?.title}
          </Typography>

          <Typography
            sx={{ fontSize: 16, fontFamily: poppins.style.fontFamily, mt: 2 }}
          >
            {blogData?.description}
          </Typography>

          {blogData?.details?.data?.map((item, index) => (
            <Box key={index} sx={{ mt: 4, mb: 4 }}>
              <Typography
                sx={{
                  color: COLORS.BLACK,
                  fontFamily: fjalla.style.fontFamily,
                  fontSize: 20,
                  //   width: "50%",
                  fontWeight: 600,
                }}
              >
                {item?.heading}
              </Typography>
              {item?.list && (
                <List>
                  {item.list?.map((val, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar sx={{ minWidth: 20 }}>
                        <Circle sx={{ fontSize: 10 }} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={val?.label}
                        secondary={val?.value}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: poppins.style.fontFamily,
                  mt: 2,
                }}
              >
                {item?.description}
              </Typography>
            </Box>
          ))}
        </Container>
      </Box>
    </div>
  );
};

export default BlogDetailsLayout;
