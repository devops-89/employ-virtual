import { poppins } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const InformationWeCollect = () => {
  const data = [
    {
      description: [
        {
          label:
            "Personal data, often known as personal information, refers to any information about an individual that can be used to identify that person. It excludes data from which the identity has been deleted (anonymous data). DIGIXITO may acquire, use, retain, and transfer various types of personal data about you, which we have classified as follows:",
        },
      ],
      listDetails: [
        {
          label:
            "First name, maiden name, last name, username or similar identifier, title, date of birth, and gender are all examples of identity data.",
        },
        {
          label:
            "Contact information comprises billing and delivery addresses, email addresses, and phone numbers.",
        },
        {
          label:
            "The internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in kinds and versions, operating system and platform, and other technology on the devices you use to access this website are all examples of technical data.",
        },
        {
          label:
            "Your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey replies are all examples of Profile Data.",
        },
        {
          label:
            "Usage Data is information on how you interact with our website, products, and services.",
        },
        {
          label:
            "Marketing and Communications Data comprises your preferences for getting marketing from us and our third-party partners, as well as your communication preferences.",
        },
      ],
      footerDescription: [
        {
          label:
            "DIGIXITO also gathers, utilizes, and shares Aggregated Data for any purpose, such as statistical or demographic data. Aggregated Data may be derived from your personal data, but it is not deemed personal data by law because it does not expose your identity directly or indirectly. For example, we may aggregate your Usage Data to determine the percentage of people that use a particular website feature. However, if we combine or connect Aggregated Data with your personal data in such a way that it can be used to directly or indirectly identify you, we recognize the combined data as personal data and handle it in line with this Privacy Policy.",
        },
        {
          label:
            "DIGIXITO may collect certain Special Categories of Personal Data about you (including health-related information, genetic data, and biometric data) if required by law, for your safety, to meet customer requirements, and to protect DIGIXITO’s confidential information, or to implement any customer process. We may collect information about criminal convictions and offenses in jurisdictions where such processing is legally permitted. Except in places that require explicit consent, we will typically rely on another legal basis of processing (and will not require Explicit Consent to process) such as Special Categories of Personal Data or criminal conviction data.",
        },
      ],
    },
    {
      title: "If you fail to provide personal data",
      description: [
        {
          label:
            "If we are required by law or under the terms of a contract we have with you to collect personal data and you fail to supply that data when requested, we may be unable to complete the contract we have or are attempting to enter into with you (for example, to provide you with or avail from you certain goods or services). In this event, we may be forced to cancel a product or service you have with us; nevertheless, we will warn you if this is the case at the time.",
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
          2. THE INFORMATION WE COLLECT ABOUT YOU
        </Typography>

        {data.map((val, i) => (
          <Box key={i} sx={{ mt: 2 }}>
            <Typography
              sx={{
                fontSize: 18,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
              }}
            >
              {val.title}
            </Typography>
            {val.description?.map((item, i) => (
              <Typography sx={{ fontFamily: poppins.style.fontFamily }} key={i}>
                {item.label}
              </Typography>
            ))}
            {val.listDetails && (
              <List>
                {val.listDetails.map((item, index) => (
                  <ListItem disablePadding key={index}>
                    <ListItemAvatar
                      sx={{ minWidth: 20, alignItems: "flex-start" }}
                    >
                      <Circle sx={{ fontSize: 5, color: "#000" }} />
                    </ListItemAvatar>
                    <ListItemText primary={item.label} slotProps={{}} />
                  </ListItem>
                ))}
              </List>
            )}
            {val.footerDescription?.map((item, i) => (
              <Typography sx={{ fontFamily: poppins.style.fontFamily }} key={i}>
                {item.label}
              </Typography>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default InformationWeCollect;
