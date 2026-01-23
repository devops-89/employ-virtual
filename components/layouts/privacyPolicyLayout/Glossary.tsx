import { poppins } from "@/utils/fonts";
import { Box, Typography, Container, ListItem, List } from "@mui/material";
import React from "react";

const Glossary = () => {
  const data = [
    {
      title: "Lawful Basis",
      description: [
        {
          label:
            "Legitimate interest refers to our company’s desire to run and manage our operations in a way that will provide you with the finest service/product and the best and most secure experience. Before we use your personal data for our legitimate interests, we make sure we weigh all of the potential effects—both good and bad—on you and your rights. Unless we have your consent or are otherwise required or permitted by law, We never use your personal information for purposes where the impact on you would be greater than the benefit to us. By getting in touch with us, you can learn more about how we weigh our legitimate interests against any possible effects on you with regard to particular activities.",
        },
      ],
    },
    {
      title: "Performance of Contract",
      description: [
        {
          label:
            " implies handling your data where doing so is required to fulfil a contract to which you are a party or to take action at your request prior to fulfilling a contract.",
        },
      ],
    },
    {
      title: "Comply with a legal or regulatory obligation",
      description: [
        {
          label:
            " implies handling your personal information where doing so is required to meet a legal or regulatory requirement to which we are subject.",
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
            mt: 6,
            fontFamily: poppins.style.fontFamily,
          }}
        >
          8. GLOSSARY
        </Typography>

        <List sx={{ pl: 0, mt: 3 }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ mt: index === 0 ? 0 : 2 }}>
              {index === 0 ? (
                <>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: poppins.style.fontFamily, mt: 1 }}
                  >
                    {item.description[0].label}
                  </Typography>
                </>
              ) : (
                <ListItem
                  disablePadding
                  sx={{
                    display: "list-item",
                    listStyleType: "decimal",
                    mb: 2,
                    ml:4
                  }}
                >
                  <Typography sx={{ fontFamily: poppins.style.fontFamily }}>
                    <strong>{item.title}</strong> {item.description[0].label}
                  </Typography>
                </ListItem>
              )}
            </Box>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Glossary;
