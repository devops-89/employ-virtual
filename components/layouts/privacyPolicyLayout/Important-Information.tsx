import { poppins } from "@/utils/fonts";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const ImportantInformation = () => {
  const data = [
    {
      title: "Purpose of This Privacy Policy",
      description: [
        {
          label:
            "This Global Privacy Policy is intended to provide you with information about how DIGIXITO collects, saves, uses, discloses, and processes your personal data when we collect it through any method. Our website is not designed for children, and we do not knowingly gather data about children on it. A child is generally defined as someone under the age of 16 (under EU law), but you should check to see whether your local laws have a different age limit for legal purposes.",
        },
        {
          label:
            "Certain customer agreements may include provisions governing the acquisition, use, storage, and disposal of information. If a term of a customer agreement conflicts or is otherwise inconsistent with a provision of this Privacy Policy, the customer agreement provision will take precedence.",
        },
      ],
    },
    {
      title: "About Digixito",
      description: [
        {
          label:
            "DIGIXITO is a global virtual resourcing firm that is pioneering, agile, and innovative, with the objective of improving market function.",
        },
      ],
    },
    {
      title: "Controller",
      description: [
        {
          label:
            "As a controller, Digixito Media Private Limited presents this Privacy Policy to describe our practices for the collection, storage, use, disclosure, and other processing of personal data. If you have any questions regarding this Privacy Policy, or if you want to exercise your legal rights, please contact the Privacy Office using the information provided below practices.",
        },
      ],
    },
    {
      title: "Contact Details",
      heading: "Digixito Media Private Limited",
      contactDetails: [
        {
          label: "Email address :",
          value: "info@digixito.com",
        },
        {
          label: "Postal Address :",
          value: "2nd Floor, D-320, Sector 63, Noida, UttarPradesh – 201307 IN",
        },
        {
          label: "Phone :",
          value: "0120-4129519",
        },
      ],
    },
    {
      title:
        "Changes to the Privacy Policy and Your Obligation to Inform Us of Personal Data Changes",
      description: [
        {
          label:
            "This Privacy Policy is reviewed and updated on a regular basis. When we do, we will update the Privacy Policy with the date of the revision and post it on this website. Check the “Last Updated” date at the top of this Privacy Policy to find out when we last updated it. You can also acquire previous versions of this Privacy Policy by contacting us.",
        },

        {
          label:
            "It is critical that the personal information we have on file for you is correct and up to date. Please notify us if your personal information changes during your partnership with us.",
        },
      ],
    },
    {
      title: "Third-Party Links",
      description: [
        {
          label:
            "Links to third-party websites, plug-ins, and programs may appear on our website. By clicking on those links or enabling those connections, third parties may be able to gather or share information about you. We have no control over these third-party websites and are not liable for their privacy policies. This Privacy Policy does not apply to information collected by any third-party website or service accessed through the Services.",
        },
      ],
    },
  ];
  return (
    <div>
      <Container maxWidth="xl">
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 24,
            fontFamily: poppins.style.fontFamily,
          }}
        >
          1. IMPORTANT INFORMATION ABOUT US
        </Typography>
        {data.map((val, i) => (
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
            {val.description?.map((item, i) => (
              <Typography sx={{ fontFamily: poppins.style.fontFamily }} key={i}>
                {item.label}
              </Typography>
            ))}
            {val.contactDetails?.map((item, i) => (
              <Typography
                sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 550 }}
                key={i}
              >
                {item.label}{" "}
                <Typography component={"span"}>{item.value}</Typography>
              </Typography>
            ))}
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default ImportantInformation;
