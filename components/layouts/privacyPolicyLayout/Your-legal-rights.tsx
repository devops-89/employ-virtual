import { poppins } from "@/utils/fonts";
import { Box, Typography, Container, ListItem, List } from "@mui/material";
import React from "react";

const YourLegalRights = () => {
  const data = [
    {
      description: [
        {
          label:
            "Your personal data under protection laws in accordance with any applicable data protection regulations, you have the right to seek deletion of your personal data, have it corrected, or access to it. You also have the right to revoke your permission. You can get in touch with our privacy office at privacy@digixito.com if you want to exercise any of the rights mentioned above. Additionally, you have the right to contact the relevant data protection authorities.",
        },
      ],
    },
    {
      title: "Time Limit to Respond",
      description: [
        {
          label:
            "We make every effort to respond to all reasonable requests within a month or any shorter time frame that may be mandated by law. We will let you know and keep you informed if there will be a delay that is required and allowed by the law.",
        },
      ],
    },
    {
      title: "Complaints",
      description: [
        {
          label:
            "If you have a problem with the way we handle your personal information, please send it to privacy@Digixito.com, and we’ll do our best to address it as soon as we can. This does not affect your ability to file a complaint with the data protection authorities in the nation where you reside or work if you believe we have broken data protection laws there.",
        },
      ],
    },
  ];
  const rightsList = [
    {
      title: "Request access",
      description:
        " to your personal information (commonly known as a “data subject access request”). This gives you the chance to request a copy of the personal information we currently have on file for you and confirm its accuracy.",
    },
    {
      title: "Request correction",
      description:
        " of the personal information, we maintain about you. This gives you the opportunity to change any incomplete or erroneous data we may have about you, albeit we may need to confirm the veracity of any updated information you offer. When necessary, you can get in touch with DIGIXITO using the Contact Information provided to update or modify your Personal Data.",
    },
    {
      title: "Request erasure",
      description:
        " of your personal data. This gives you the option to request that we stop processing personal data if there is no compelling reason to do so. Additionally, you have the right to request that we destroy your personal data in cases where you have successfully exercised your right to object to processing (see below), in which we may have handled your data improperly, or in which we are compelled to do so by local law. However, please be aware that there are some circumstances in which we may not always be able to honour your request for erasure. If this is the case, we will let you know at the time of your request.",
    },
    {
      title: "Object to processing",
      description:
        " if we are processing your personal data based on our (or a third party’s) legitimate interests and there is something about your case that makes you want to object to processing on this ground because you believe it affects your basic rights and freedoms. In cases where we are using your personal data for direct marketing, you also have the right to object. In some circumstances, we may be able to show that our legitimate processing needs outweigh your rights and freedoms.",
    },
    {
      title: "Request restriction of processing",
      description:
        " your individual data. This gives you the option to request that we halt processing your personal data in the following circumstances:",
      lists: [
        "if you want us to confirm the data accuracy",
        "if our use of the data is unlawful but you do not want us to delete it.",
        "if you need us to keep the data even if we no longer need it because you need it to establish, exercise, or defend legal claims",
        "you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.",
      ],
    },
    {
      title: "Request the transfer",
      description:
        " to you or to a third party, of your personal information. Your personal information will be delivered to you, or a specified third party, in a structured, generally accepted machine-readable manner. Keep in mind that this privilege only applies to automated information that we utilized with your prior consent or to carry out a contract with you.",
    },
    {
      title: "Withdraw consent at any time",
      description:
        " by getting in touch with us in cases where we are processing your personal data with your consent. However, the processing that was done before you withdrew your consent will still be legal. If you withdraw your consent, DIGIXITO may restrict your access to the Services, cease all contact with you, provide you the goods or services, or all of the above.",
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
          7. YOUR LEGAL RIGHTS
        </Typography>
        {data.map((val, i) => (
          <Box key={i}>
            {val.description?.map((item, idx) => (
              <Box key={idx} sx={{ mb: 4, mt: 2 }}>
                {val.title && (
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 700,
                    }}
                  >
                    {val.title}
                  </Typography>
                )}

                <Typography sx={{ fontFamily: poppins.style.fontFamily }}>
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 700,
            mt: 4,
            fontFamily: poppins.style.fontFamily,
          }}
        >
          You have the right to:
        </Typography>

        <List sx={{ pl: 2, mt: 2 }}>
          {rightsList.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "list-item",
                listStyleType: "disc",
                mb: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontFamily: poppins.style.fontFamily }}>
                  <strong>{item.title}</strong> {item.description}
                </Typography>

                {item.lists && (
                  <List sx={{ pl: 3, mt: 1 }}>
                    {item.lists.map((list, i) => (
                      <ListItem
                        key={i}
                        disablePadding
                        sx={{
                          display: "list-item",
                          listStyleType: "decimal",
                          mb: 0.5,
                        }}
                      >
                        <Typography
                          sx={{ fontFamily: poppins.style.fontFamily }}
                        >
                          {list}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default YourLegalRights;
