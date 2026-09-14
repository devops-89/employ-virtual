import { poppins } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const HowwecollectpersonalData = () => {
  const collectionMethods = [
    {
      title: "Direct interactions",
      label:
        "You may give us your Identity, Contact, and Financial Data by filling in forms or by corresponding with us by post, phone, email, or otherwise. This includes personal data you provide when you apply for our products or services, create an account, subscribe to our publications, request marketing, or contact customer support.",
    },
    {
      title: "Automated technologies or interactions",
      label:
        "As you interact with our website or services, we may automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, server logs, and other similar technologies.",
    },
    {
      title: "Third parties or publicly available sources",
      label:
        "We may receive personal data about you from various third parties and public sources, including analytics providers (such as Google Analytics), advertising networks, search information providers, and technical, payment, and delivery service providers.",
    },
  ];

  return (
    <Box sx={{ mt: 4, mb: 8 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 4, md: 6 } }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 24,
            fontFamily: poppins.style.fontFamily,
          }}
        >
          3. HOW WE COLLECT YOUR PERSONAL DATA
        </Typography>

        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            mt: 2,
          }}
        >
          We use different methods to collect data from and about you, including through:
        </Typography>

        {collectionMethods.map((val, i) => (
          <Box sx={{ my: 2 }} key={i}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: 18,
                mb: 1,
              }}
            >
              {val.title}
            </Typography>
            <Typography sx={{ fontFamily: poppins.style.fontFamily }}>
              {val.label}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default HowwecollectpersonalData;
