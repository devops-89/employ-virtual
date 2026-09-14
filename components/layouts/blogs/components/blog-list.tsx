"use client";
import { BLOGS_DATA } from "@/assets/generic-array";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./blog-card";

const BlogList = () => {
  return (
    <Box sx={{ py: { xs: 5, sm: 8, md: 10 }, backgroundColor: "#fafafa" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 }, textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 14, md: 15 },
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              color: COLORS.PRIMARY,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              mb: 1,
            }}
          >
            OUR LATEST INSIGHTS
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 24, sm: 32, md: 40, lg: 44 },
              fontFamily: poppins.style.fontFamily,
              fontWeight: 900,
              color: COLORS.TEXT_BLACK,
              lineHeight: 1.2,
            }}
          >
            Explore Our Recent Blogs
          </Typography>
        </Box>

        {/* Blog Cards Grid */}
        <Grid
          container
          spacing={{ xs: 2.5, sm: 3, md: 4 }}
          justifyContent="center"
        >
          {BLOGS_DATA.map((blog) => (
            <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }} key={blog.id}>
              <BlogCard
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.date}
                readTime={blog.readTime}
                author={blog.author}
                category={blog.category}
                slug={blog.slug}
                img={blog.img}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogList;
