"use client";
import { BLOG_DETAIL_DATA } from "@/assets/blog-details";
import { BLOGS_DATA } from "@/assets/generic-array";
import BlogCard from "@/components/layouts/blogs/components/blog-card";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import {
  AccessTime,
  CalendarToday,
  CheckCircleOutline,
  Person,
} from "@mui/icons-material";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const BlogContent = ({ blog }: { blog: BLOG_DETAIL_DATA }) => {
  const relatedBlogs = BLOGS_DATA.filter(
    (item) => item.slug !== blog.slug,
  ).slice(0, 3);

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Section 1: Main Blog Intro Header */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
          <Box sx={{ width: "100%" }}>
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                gap={{ xs: 1, sm: 1.5 }}
                sx={{ mb: 2 }}
              >
                <Chip
                  label={blog.category}
                  size="small"
                  sx={{
                    backgroundColor: COLORS.PRIMARY,
                    color: COLORS.BLACK,
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: 11, sm: 12 },
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                />
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ color: COLORS.TEXT_GREY }}
                >
                  <CalendarToday sx={{ fontSize: { xs: 14, sm: 16 } }} />
                  <Typography
                    sx={{
                      fontSize: { xs: 12, sm: 13 },
                      fontFamily: poppins.style.fontFamily,
                    }}
                  >
                    {blog.date}
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>•</Typography>
                  <AccessTime sx={{ fontSize: { xs: 14, sm: 16 } }} />
                  <Typography
                    sx={{
                      fontSize: { xs: 12, sm: 13 },
                      fontFamily: poppins.style.fontFamily,
                    }}
                  >
                    {blog.readTime}
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: 20, sm: 26, md: 32, lg: 36 },
                  fontWeight: 800,
                  fontFamily: poppins.style.fontFamily,
                  lineHeight: { xs: 1.3, md: 1.25 },
                  mb: { xs: 1.5, sm: 2 },
                  color: COLORS.TEXT_BLACK,
                }}
              >
                {blog.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  fontWeight: 400,
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.TEXT_GREY,
                  lineHeight: 1.8,
                  mb: { xs: 2.5, sm: 3 },
                }}
              >
                {blog.intro}
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: { xs: 38, sm: 44 },
                    height: { xs: 38, sm: 44 },
                    borderRadius: "50%",
                    backgroundColor: COLORS.BLACK,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: COLORS.PRIMARY,
                    flexShrink: 0,
                  }}
                >
                  <Person sx={{ fontSize: { xs: 20, sm: 24 } }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 700,
                      fontSize: { xs: 13, sm: 14 },
                      color: COLORS.TEXT_BLACK,
                    }}
                  >
                    {blog.author}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontSize: { xs: 11, sm: 12 },
                      color: COLORS.TEXT_GREY,
                    }}
                  >
                    {blog.authorRole}
                  </Typography>
                </Box>
              </Stack>
          </Box>
        </Container>
      </Box>

      {/* Section 2: Sections Content Body */}
      <Box sx={{ py: { xs: 4, sm: 6 }, backgroundColor: COLORS.WHITE }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
          {blog.sections.map((section, idx) => (
            <Box key={idx} sx={{ mb: { xs: 4, sm: 5 } }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 18, sm: 22, md: 26, lg: 28 },
                  fontWeight: 800,
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.TEXT_BLACK,
                  mb: { xs: 1.5, sm: 2 },
                  lineHeight: 1.35,
                }}
              >
                {section.subheading}
              </Typography>

              {section.paragraphs.map((pText, pIdx) => (
                <Typography
                  key={pIdx}
                  sx={{
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    fontWeight: 400,
                    fontFamily: poppins.style.fontFamily,
                    color: COLORS.TEXT_BLACK,
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  {pText}
                </Typography>
              ))}

              {section.bullets && (
                <Stack spacing={1.5} sx={{ mt: 2, mb: 3 }}>
                  {section.bullets.map((bText, bIdx) => (
                    <Stack
                      key={bIdx}
                      direction="row"
                      alignItems="flex-start"
                      spacing={1.5}
                    >
                      <CheckCircleOutline
                        sx={{
                          color: COLORS.PRIMARY,
                          backgroundColor: COLORS.BLACK,
                          borderRadius: "50%",
                          fontSize: { xs: 18, sm: 20 },
                          mt: "2px",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: 13.5, sm: 15 },
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 500,
                          color: COLORS.TEXT_BLACK,
                          lineHeight: 1.6,
                        }}
                      >
                        {bText}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              )}
            </Box>
          ))}

          {/* Key Takeaways Block (If Available) */}
          {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
            <Box
              sx={{
                my: { xs: 4, sm: 6 },
                p: { xs: 2.5, sm: 4 },
                backgroundColor: "#f8fafc",
                borderRadius: { xs: 2.5, sm: 3 },
                border: "1px solid #e2e8f0",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 20 },
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 800,
                  color: COLORS.TEXT_BLACK,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                💡 Key Takeaways
              </Typography>
              <Stack spacing={1.5}>
                {blog.keyTakeaways.map((takeaway, tIdx) => (
                  <Stack
                    key={tIdx}
                    direction="row"
                    alignItems="flex-start"
                    spacing={1.5}
                  >
                    <CheckCircleOutline
                      sx={{
                        color: COLORS.PRIMARY,
                        backgroundColor: COLORS.BLACK,
                        borderRadius: "50%",
                        fontSize: { xs: 18, sm: 20 },
                        mt: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: 13.5, sm: 15 },
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 500,
                        color: COLORS.TEXT_BLACK,
                        lineHeight: 1.6,
                      }}
                    >
                      {takeaway}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          )}
        </Container>
      </Box>

      {/* Quote / Insight Section (Full-width Dark Section styled like ManagementSuited in Image 2) */}
      {blog.quote && (
        <Box
          sx={{
            backgroundColor: COLORS.BLACK,
            py: { xs: 7, sm: 9, md: 10 },
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
            <Grid
              container
              spacing={{ lg: 8, md: 6, xs: 4 }}
              alignItems="center"
            >
              <Grid size={{ lg: 4, xs: 12 }}>
                <Typography
                  sx={{
                    fontSize: { lg: 46, md: 38, sm: 32, xs: 26 },
                    color: COLORS.WHITE,
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 800,
                    lineHeight: 1.1,
                    textTransform: "uppercase",
                  }}
                >
                  EXPERT INSIGHT
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16 },
                    color: COLORS.TEXT_GREY,
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 400,
                    mt: 2,
                  }}
                >
                  Core takeaway from our virtual resourcing and tech leadership
                  team.
                </Typography>
              </Grid>

              <Grid size={{ lg: 8, xs: 12 }}>
                <Box
                  sx={{
                    borderLeft: `5px solid ${COLORS.PRIMARY}`,
                    pl: { xs: 3, sm: 4 },
                    py: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { lg: 22, md: 20, sm: 18, xs: 16 },
                      fontFamily: poppins.style.fontFamily,
                      fontStyle: "italic",
                      color: COLORS.WHITE,
                      lineHeight: 1.7,
                      fontWeight: 400,
                    }}
                  >
                    "{blog.quote}"
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <Box sx={{ py: { xs: 6, sm: 8 }, backgroundColor: "#fafafa" }}>
          <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
            <Typography
              sx={{
                fontSize: { xs: 22, sm: 28, md: 36 },
                fontFamily: poppins.style.fontFamily,
                fontWeight: 900,
                color: COLORS.TEXT_BLACK,
                textAlign: "center",
                mb: { xs: 4, sm: 6 },
              }}
            >
              MORE FROM OUR BLOG
            </Typography>

            <Grid
              container
              spacing={{ xs: 2.5, sm: 3, md: 4 }}
              justifyContent="center"
            >
              {relatedBlogs.map((relBlog) => (
                <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }} key={relBlog.id}>
                  <BlogCard
                    id={relBlog.id}
                    title={relBlog.title}
                    excerpt={relBlog.excerpt}
                    date={relBlog.date}
                    readTime={relBlog.readTime}
                    author={relBlog.author}
                    category={relBlog.category}
                    slug={relBlog.slug}
                    img={relBlog.img}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default BlogContent;
