import { poppins } from "@/utils/fonts";
import { Box, Typography, Container,ListItem, List} from "@mui/material";
import React from "react";

const SharingpersonalData = () => {
  const data = [
    {
      description: [
        {
          label: "Internal Third Parties defined in the Glossary.",
        },
      ],
    },
    {
      description: [
        {
          label: "As defined in the Glossary, external third parties.",
        },
      ],
    },
    {
      description: [
        {
          label:
            "Third parties to whom we may choose to sell, transfer, or merge portions of our business or our assets. Third parties from whom we obtain services for conducting business activity. As an alternative, we can try to buy or combine with other companies. If our company changes hands, the new owners may continue to use your personal information in the manner described in this Privacy Policy.",
        },
      ],
    },
    {
      description: [
        {
          label:
            "All third parties are required by DIGIXITO to respect the security of your personal data and to handle it legally. We only permit our third-party service providers to process your personal data for those reasons and in line with our instructions. We do not authorize them to use your personal data for their own purposes.",
        },
      ],
    },
  ];
  return (
    <Box sx={{ mt: 4 }}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 24,
            fontFamily: poppins.style.fontFamily,
          }}
        >
          4. Sharing Of Your Personal Data
        </Typography>
        {data.map((val, i) => (
          <List component="ol" sx={{ listStyleType: "disc" }}>
            {i <= 2 &&
              val.description?.map((item, idx) => (
                <ListItem
                  disablePadding
                  key={i}
                  sx={{
                    display: "list-item",
                    listStyleType: "disc",
                    ml: 4,
                  }}
                >
                  <Typography
                    key={idx}
                    sx={{ fontFamily: poppins.style.fontFamily }}
                  >
                    {item.label}
                  </Typography>
                </ListItem>
              ))}
            {i ===3 &&
              val.description?.map((item, idx) => (
               
                  <Typography
                    key={idx}
                    sx={{ fontFamily: poppins.style.fontFamily }}
                  >
                    {item.label}
                  </Typography>
              ))}
          </List>
        ))}
      </Container>
    </Box>
  );
};

export default SharingpersonalData;
