import InnerHeroSection from "@/components/widgets/inner-hero-section";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import career from "@/banner/career.png";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import ManagementSuited from "@/components/widgets/management-provide-card";
import { BEST_SUITED_CARD, TAKE_CARE_CARD_DATA } from "@/assets/generic-array";
import HiringRemoteStaff from "@/components/widgets/hiring-remote-staff";
import Partners from "@/components/widgets/partners";
const CareersLayout = () => {
  return (
    <div>
      <InnerHeroSection
        heading="Careers"
        description="We're creating positive impact in the world of virtual resources."
      />
      <Box sx={{ py: 5 }}>
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid size={6}>
              <Typography
                sx={{
                  fontSize: 35,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                }}
              >
                Career Opportunities With Employ Virtual
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 300,
                  my: 2,
                  textAlign: "justify",
                }}
              >
                Employ Virtual focuses on building a bridge between talented
                workforce and the employers. As early as 2016, we were able to
                recognize that the market has enormous resources but they lacked
                skills in technology and digital media. This was the point which
                encouraged our management to start with the training program for
                the resources; so, that they are well trained in technology and
                digital media. With the passing years, our various clients
                desired to have talented workforce and this is how Employ
                Virtual was born, with an aim to provide virtual resources to
                the clients.
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 300,
                  textAlign: "justify",
                }}
              >
                When you join Employ Virtual, you join a global family. We
                ensure our employees have memorable moments with us. Want to
                grow with Employ Virtual; kindly share your resume at{" "}
                <Typography
                  component="a"
                  href="mailto:hr@digixito.com"
                  sx={{
                    fontWeight: 600,
                    color: COLORS.BLACK,
                    textDecoration: "none",
                  }}
                >
                  hr@digixito.com
                </Typography>{" "}
                .
              </Typography>
            </Grid>
            <Grid size={6}>
              <Image
                src={career}
                alt=""
                style={{
                  width: "100%",
                  height: 350,
                  borderRadius: 20,
                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <ManagementSuited
          heading="CHOOSE BEST SUITED"
          description="The managers and management make sure that your employees are 100% dedicated & productive."
          CARD_DATA={BEST_SUITED_CARD}
          isButton={false}
        />
      </Box>
      <Box>
        <HiringRemoteStaff />
      </Box>
      <Box>
        <ManagementSuited
          heading="& REST WE WILL TAKE CARE"
          description="The managers and management make sure that your employees are 100% dedicated & productive."
          CARD_DATA={TAKE_CARE_CARD_DATA}
          isButton={true}
        />
      </Box>
      <Box>
        <Partners />
      </Box>
    </div>
  );
};

export default CareersLayout;
