import { poppins } from "@/utils/fonts";
import { Box, Typography, Container,ListItem, List} from "@mui/material";
import React from "react";
import PersonalDataTable from "./Personal-data-table";

const HowwecollectpersonalData = () => {
  const data = [
    {
      description: [
        {
          label:
            "DIGIXITO gathers information, some of which is “personal data,” in connection with a current or possible business or employment relationship with you. We acquire data from and about you using a variety of methods, including the following:",
        },
      ],
      listDetails: [
        {
          title: "Direct interactions",
          description: [
            {
              label:
                "You may provide us with your Identity, Contact, and Financial Data by filling out forms or communicating with us via post, phone, email, or other means. This includes personal data you provide when you apply for our products or services, apply for a job or gain employment with us, or do business with us; create an account on our website; use our mobile applications; disclose information on our social media pages, message boards, comment fields, chat areas, or other community forums; subscribe to our service or publications; request marketing to be sent to you; enter a competition, promotion, or survey; or give us your personal data.",
            },
          ],
        },
        {
          title: "Automated technologies or interactions",
          description: [
            {
              label:
                "We may automatically collect Technical Data about your equipment, browsing actions, and habits as you interact with our website or mobile applications. We acquire this personal information through the use of cookies, server logs, and other similar technologies.",
            },
          ],
        },
        {
          title: "Third parties or publicly available sources",
          description: [
            {
              label:
                "We may obtain personal information about you from third parties and public sources, as detailed below:",
            },
          ],
        },
        {
          title: "Public Meetings.",
          description: [
            {
              label:
                " DIGIXITO accepts no responsibility or liability for personal information that you post in public forums or otherwise make public. We reserve the right, but not the duty, to monitor and remove information from comment areas, message boards, events, and other interactive sections of the Services.",
            },
          ],
        },
        {
          title: "Technical Data",
          description: [
            {
              label: " from the following parties:",
            },
          ],
        },
      ],
      technicalData: [
        {
          label:
            "Analytic providers such as Google and based outside the EU. Individual users are not typically identified by analytic services. Many analytic services allow you to opt-out of data collection;",
        },
        {
          label:
            "Data collection technology is deployed by DIGIXITO when you visit or usage of the Services. This can be used to collect information such as IP address, browser type, browser language, time zone, language settings and operating system on your device, how long you spend on various web pages, which web pages you view, your search queries, error, and performance reports, the web pages that you visited before and after using the Services. Other data collection technology is deployed by advertisers, other website operators (also known as ‘publishers’), and networks and other third parties with which DIGIXITO partners to operate and provide the Services.",
        },
        {
          label:
            "Data collection technology helps us improve your experience of the Services by, for example, storing your password so you do not have to re-enter it each time you use the Services, measuring the success of marketing campaigns, compiling statistics about the use of the Services, and helping us analyze technical and navigational information about the Services and to detect and prevent fraud;",
        },
        {
          label: "Search information providers",
        },
      ],
      searchInformation: [
        {
          label:
            "Contact, Financial, and Transaction Data from suppliers of technical, payment, and delivery services located within or outside the EU.",
        },
        {
          label:
            "Identity and contact information obtained from data brokers or aggregator situated in or outside the EU.",
        },
        {
          label:
            "Identity and contact information obtained from publicly available sources within the EU, such as Companies House and the Electoral Register.",
        },
      ],
    },
    {
      title: "Purposes for Which We Will Use Your Personal Data",
      description: [
        {
          label:
            "We have included a table-format overview of all the ways we intend to use your personal data, as well as the legal bases on which we rely. We have also indicated our legitimate interests when applicable. Please keep in mind that depending on the exact reason for which we are utilizing your data, we may treat your personal data for more than one legal justification. Please contact us if you require additional information regarding the exact legal ground on which we are relying to process your personal data when more than one ground is shown in the table below.",
        },
      ],
    },
    {
      title: "Marketing Promotional offers from us",
      description: [
        {
          label:
            "We may utilize your Identity, Contact, Technical, Usage, and Profile Data to build an opinion about what you might want or need, or what you might be interested in. This is how we determine which products, services, and offers may be of interest to you (we call this marketing). You will receive marketing messages from us if you have requested information from us, purchased products or services from us, or given us your contact information when you joined a competition or registered for a promotion and have not opted out of receiving that marketing.",
        },
      ],
    },
    {
      title: "Third-party marketing Opting out",
      description: [
        {
          label:
          "Before we disclose your personal information with any firm other than DIGIXITO for marketing reasons, we will need your express opt-in consent You can request that we or third parties stop sending you marketing messages at any time by following the opt-out buttons in any marketing message you get or by contacting us at any time. If you opt-out of receiving these marketing messages, your personal data submitted to us as a consequence of a product/service purchase, warranty registration, product/service experience, or other transactions will not be affected.",
        },
      ],
    },
    {
      title: "Change of purpose",
      description: [
        {
          label:
            "We may utilize your Identity, Contact, Technical, Usage, and Profile Data to build an opinion about what you might want or need, or what you might be interested in. This is how we determine which products, services, and offers may be of interest to you (we call this marketing). You will receive marketing messages from us if you have requested information from us, purchased products or services from us, or given us your contact information when you joined a competition or registered for a promotion and have not opted out of receiving that marketing.",
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
          3. HOW WE COLLECT YOUR PERSONAL DATA
        </Typography>
        {data.map((val, i) => (
          <Box key={i}>
            {i === 0 &&
              val.description?.map((item, idx) => (
                <Typography
                  key={idx}
                  sx={{ fontFamily: poppins.style.fontFamily, my: 2 }}
                >
                  {item.label}
                </Typography>
              ))}
            {val.listDetails?.map((item, i) => (
              <ListItem
                disablePadding
                key={i}
                sx={{
                  display: "list-item",
                  listStyleType: "disc",
                  ml: 3,
                }}
              >
                <Box
                  sx={{
                    display: "inline",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 600,
                      mr: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {item.description?.map((desc, j) => (
                    <Typography
                      key={j}
                      component="span"
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                      }}
                    >
                      {desc.label}
                    </Typography>
                  ))}
                </Box>
              </ListItem>
            ))}
            <List component="ol" sx={{ pl: 0 }}>
              {val.technicalData?.map((item, i) => (
                <ListItem
                  disablePadding
                  key={i}
                  sx={{
                    display: "list-item",
                    listStyleType: "decimal",
                    ml: 8,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{ fontFamily: poppins.style.fontFamily }}
                  >
                    {item.label}
                  </Typography>
                </ListItem>
              ))}
            </List>

            {i === 1 &&
              val.description?.map((item, idx) => (
                <Box key={idx} sx={{ mb: 4 }}>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 900,
                    }}
                  >
                    {val.title}
                  </Typography>
                  <Typography sx={{ fontFamily: poppins.style.fontFamily }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
          </Box>
        ))}
        <PersonalDataTable />

        {data.map((val, i) => (
          <Box key={i}>
            {i >= 2 &&
              val.description?.map((item, idx) => (
                <Box key={idx} sx={{ mb: 4, mt:2 }}>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 700,
                    }}
                  >
                    {val.title}
                  </Typography>

                  <Typography sx={{ fontFamily: poppins.style.fontFamily }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
          </Box>
        ))}
      
      </Container>
    </Box>
  );
};

export default HowwecollectpersonalData;
