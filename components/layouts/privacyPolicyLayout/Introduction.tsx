import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const PrivacyPolicyintroduction = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Box sx={{ py: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              fontSize: 40,
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: poppins.style.fontFamily,
              mt: 2,
            }}
          >
            Digixito Media Private Limited and its subsidiaries
            employvirtual.com and theecomguru.com (referred to collectively or
            individually as “DIGIXITO” or “our” or “we” or “us”) appreciate your
            privacy and are committed to preserving your personal data. This
            Global Corporate Privacy Policy (the “Global Privacy Policy” or
            “Privacy Policy”) explains how we handle your personal information.
            We may collect your personal data in a variety of ways, as described
            in this Privacy Policy, such as when you visit our website
            (regardless of where you visit it from) or use our mobile
            applications, apply for a job, apply for or use our products and
            services (collectively, including our website and mobile
            applications, the “Services”), or otherwise communicate with us. We
            may also obtain your personal information from third-party
            sources.This Privacy Policy explains how we collect, save, use,
            disclose, and process your personal data, as well as how the law
            protects you.
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: poppins.style.fontFamily,
              mt: 2,
            }}
          >
            You shall be regarded to have the capacity to enter into a legally
            binding contract in accordance with the relevant law in the
            jurisdiction from which you are accessing our Services by accessing
            or using our Services or otherwise providing us with your
            information. As a result, you will be deemed to have read,
            understood, and agreed to the practices and procedures indicated in
            this Privacy Policy, and you will be bound by its terms.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default PrivacyPolicyintroduction;
