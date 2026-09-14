import { PARTNER_DATA } from "@/assets/generic-array";
import { Box, Container, Grid } from "@mui/material";
import PartnerCard from "./common/partner-card";

const Partners = () => {
  return (
    <Box sx={{ pb: 5 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
        <Grid container spacing={3} justifyContent="center">
          {PARTNER_DATA.map((val, i) => (
            <Grid size={{ lg: 1.7, md: 3, sm: 4, xs: 6 }} key={i}>
              <PartnerCard img={val.img} name={val.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Partners;
