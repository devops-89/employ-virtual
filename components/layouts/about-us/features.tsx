import { ABOUT_FEATURES_CARD_DATA } from "@/assets/generic-array";
import { COLORS } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import FeaturesCard from "./components/features-card";

const Features = () => {
  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: COLORS.DARK,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
        <Grid container>
          {ABOUT_FEATURES_CARD_DATA.map((val, i) => (
            <Grid size={{ lg: 6, xs: 12 }} key={i}>
              <FeaturesCard heading={val.heading} data={val.data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
