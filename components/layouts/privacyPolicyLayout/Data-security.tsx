import { poppins } from "@/utils/fonts";
import { Box, Typography, Container,ListItem, List} from "@mui/material";
import React from "react";

const DataSecurity = () => {
  const data = [
    {
      description: [
        {
          label:
            "To protect your personal information from being mistakenly lost, used, accessed, altered, or disclosed, DIGIXITO has put in place the necessary security measures. Additionally, we only allow employees, agents, contractors, and other third parties who have a business need to know access to your personal information. They have a confidentiality obligation and will only act in accordance with our instructions while processing your personal data. When we are legally compelled to do so, DIGIXITO will notify you and any relevant regulator of a breach and will have measures in place to deal with any suspected personal data breach. The information security management system requirements (Information Technology – Security Techniques – Information Security Management System – Requirements), a widely accepted international security management standard, are met by DIGIXITO’s security management standards.",
        },
      ],
    },
    {
      description: [
        {
          label:
            "In order to get access to password-protected or secure sections of the Services, you must maintain the security of your account credentials and any other authentication methods. When using your account credentials to access the Services, DIGIXITO will regard this as your consent. Regarding such unlawful use of your account, we won’t be held responsible. It is forbidden and could result in legal action for unauthorized access to password-protected or secure locations. If we suspect or find any evidence of a security breach, we may immediately suspend your usage of all or a portion of the Services. Please use the contact information given to inform us right away if you think the information you gave us is no longer secure.",
        },
      ],
    },
    
  ];
  return (
    <Box sx={{ mt: {xs: 3, md: 4} }}>
      <Container maxWidth="xl" sx={{ px: {xs: 1, md: 3} }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {xs: 20, md: 24, lg: 28},
            fontFamily: poppins.style.fontFamily,
            mb: {xs: 2, md: 3},
          }}
        >
          5. DATA SECURITY
        </Typography>
        {data.map((val, i) => (
          <List
            key={i}
            sx={{
              pl: {xs: 2, md: 4},
              mb: {xs: 1.5, md: 2},
            }}
          >
            {val.description?.map((item, idx) => (
              <ListItem
                disablePadding
                sx={{
                  display: "list-item",
                  mb: {xs: 1, md: 1.5},
                }}
              >
                <Typography
                  key={idx}
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontSize: {xs: 14, md: 16},
                  }}
                >
                  {item.label}
                </Typography>
              </ListItem>
            ))}
          </List>
        ))}
      </Container>
    </Box>
  );
};

export default DataSecurity;
