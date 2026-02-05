import InnerHeroSection from "@/components/widgets/inner-hero-section";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import BlogCards from "./Blog-Cards";
import { BLOGS_DATA } from "@/assets/blogs";

const BlogsLayout = () => {
  return (
    <div>
      <InnerHeroSection
        heading="Blog"
        description="Employ Virtual is a 360° virtual resourcing service provider, who help organisations save employees cost more than 80%."
      />
      <Box sx={{ my: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {BLOGS_DATA.map((val, i) => (
              <Grid size={{ lg: 4, xs: 12 }} key={i}>
                <BlogCards
                  img={val.img}
                  title={val.title}
                  description={val.description}
                  slug={val.slug}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default BlogsLayout;
