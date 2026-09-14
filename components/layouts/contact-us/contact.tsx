import { CONTACT_DATA } from "@/assets/generic-array";
import { Box, Container, Grid, Stack } from "@mui/material";
import ContactCard from "./components/contact-card";
import Form from "./components/form";

const Contact = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
        <Grid container spacing={{ lg: 0, xs: 4 }}>
          <Grid size={{ lg: 3, xs: 12 }}>
            <Stack
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              spacing={4}
            >
              {CONTACT_DATA.map((val, i) => (
                <ContactCard
                  country={val.country}
                  addressLine1={val.addressLine1}
                  streetAddress={val.streetAddress}
                  addressLine2={val.addressLine2}
                  phoneNumber={val.phoneNumber}
                  email={val.email}
                  key={i}
                  img={val.img}
                />
              ))}
            </Stack>
          </Grid>
          <Grid size={{ lg: 9, xs: 12 }}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
