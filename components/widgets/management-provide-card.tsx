import { COLORS } from "@/utils/enum";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { BEST_SUITED_CARD } from "@/assets/generic-array";
import WhyEmployCard from "./common/why-employ-card";
import { SUITED_CARD_DATA } from "@/utils/types";

const ManagementSuited = ({
  heading,
  description,
  CARD_DATA,
  isButton,
}: SUITED_CARD_DATA) => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        py: 10,
        my: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={10}>
          <Grid size={4}>
            <Typography
              sx={{
                fontSize: 50,
                color: COLORS.WHITE,
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {heading}
            </Typography>
            <Typography
              sx={{
                fontSize: 17,
                color: COLORS.TEXT_GREY,
                fontWeight: 400,
                mt: 2,
              }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid size={8}>
            <Grid container spacing={4}>
              {CARD_DATA.map((val, i) => (
                <Grid size={4} key={i}>
                  <WhyEmployCard
                    img={val.img}
                    title={val.title}
                    description={val.description}
                    color={val.color}
                  />
                </Grid>
              ))}
            </Grid>
            {isButton && (
              <Box sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    border: "1px solid #ffffff ",
                    borderRadius: 0,
                    color: COLORS.WHITE,
                    ":hover": {
                      color: COLORS.PRIMARY,
                    },
                    mt: 3,
                    width: 150,
                    p: 1.5,
                  }}
                >
                  hire now
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ManagementSuited;
