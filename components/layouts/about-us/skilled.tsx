import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Skilled = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, py: 5 }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid size={4}>
            <Typography
              sx={{
                fontSize: 35,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 900,
              }}
            >
              Creating skilled & dedicated pool of resources
            </Typography>
          </Grid>
          <Grid size={8}>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: 30,
                fontFamily: poppins.style.fontFamily,
              }}
            >
              Employ virtual carry forward the legacy of digixito, whose mantra
              was digital success.
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: 16,
                fontFamily: poppins.style.fontFamily,
                mt: 2,
              }}
            >
              Digixito as early as 2016 recognized that the market has abundant
              of resources but none of them were highly skillful in technology
              and digital. This gave birth to training and preparing the
              resources who are highly trained in digital and technology.
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: 16,
                fontFamily: poppins.style.fontFamily,
                mt: 2,
              }}
            >
              Coming forward, working with various clients, when they started
              wishing to have resources like digixito, we decided to virtually
              share them and employ virtual was born. Today hundreds of our
              clients have hired resources and teams from us, working for them
              like their own employees from our development center in Noida.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skilled;
