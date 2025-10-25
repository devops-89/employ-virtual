import { Box, Container, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import Form from "./components/form";
import ContactCard from "./components/contact-card";
import { CONTACT_DATA } from "@/assets/generic-array";

const Contact = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid size={3}>
            <Stack
              alignItems="flex-start"
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
          <Grid size={9}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
