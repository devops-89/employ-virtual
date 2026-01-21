"use client";

import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Introduction = () => {
  const data = [
    {
      title: "Terms of Use",
      description: [
        {
          label:
            "Before using this website (hereafter referred to as “website”), please read these terms of use carefully. Your access to and use of the website are governed by these website terms of use (hereafter, “terms of use”). The website is only made accessible to you if you accept the conditions of use outlined below. Do not access or use the website if you do not agree to all of the terms and conditions. You and the organization you are authorized to represent (hereafter referred to as “you” or “your”) agree to be bound by the terms of use by accessing or using the website.",
        },
      ],
    },
    {
      title: "User Eligibility",
      description: [
        {
          label:
            "The website – www.employvirtual.com is made available by Digixito Media Private Limited and is only open to organisations and people who have achieved the age of majority and who, in accordance with the current law, are entitled to enter into legally binding agreements. You are not allowed to use the website if you do not meet the requirements.",
        },
      ],
    },
    {
      title: "Scope Of Terms Of Use",
      description: [
        {
          label:
            "Except to the extent that such Services are covered by a different agreement, these Terms of Use govern Your use of the Website and all apps, software, and services (collectively referred to as “Services”) made available over the website. Use of certain Services and other things made available to you via the website may be subject to additional terms or agreements (“Service Agreement(s)”). Any such Service Agreements will be included with the relevant Services, listed in conjunction with them, or accessible through a website connected to them.",
        },
      ],
    },
    {
      title: "Modifications",
      description: [
        {
          label:
            "These Terms of Use are subject to change at any moment by Digixito. Any modifications to these Terms of Use will be considered accepted if you continue to use the website following their publication. At Digixito’s sole discretion, any element of the website may be modified, added to, removed from, or updated without prior notice. Additionally, Digixito reserves the right to alter or impose fees at any moment for goods and services made available through the website.",
        },
      ],
    },
    {
      title: "Privacy Statement for Digixito",
      description: [
        {
          label:
            "You guarantee to Digixito that you have obtained all required consents for the processing of any individual’s personal information that You supply to Digixito in order for the Services to be used.",
        },
      ],
    },
    {
      title: "Ownership and License",
      description: [
        {
          label:
            "The website and its contents (the “Content”), as well as any and all intellectual property rights associated with them (“Intellectual Property”), are the exclusive property of Digixito, its affiliates, or other parties. Intellectual property laws and other legal frameworks in India and other nations safeguard the Content. Aspects of the website may not be copied or imitated in whole or in part because they are protected by trade name, trade secret, unfair competition, and other laws. The trademarks, service marks, or trade names (“Marks”) of Digixito Media Private Limited, its affiliates, or other organizations that have granted Digixito the right and license to use such Marks are protected by law and may not be used or interfered with in any way without the express written consent of Digixito. Customized graphics, icons, and other items that appear on the website may also be protected by law. The Intellectual Property of the website may not be copied, reproduced, modified, amended, leased, loaned, sold, or used to make any derivative works without the prior written consent of Digixito or the applicable third party, unless otherwise expressly permitted by these Terms of Use. You are not given any express or implied rights by Digixito except as specifically stated in this agreement respect for the intellectual property owned by Digixito or any other entity.",
        },
        {
          label:
            "You are hereby granted a limited, personal, non-transferable, non-sublicensable, and revocable licence by Digixito to: (a) access and use the website, Content, and Services solely in the manner presented by Digixito; and (b) access and use the Digixito computer and network services provided within the website (the “Digixito Systems”) solely in the manner expressly authorized by Digixito By allowing You to access the website, Digixito does not transfer any ownership of or title to the Digixito Systems, data made accessible through the Digixito Systems (the “Information”), Content, Services, website, or any other Digixito property, save from this restricted licence. None of the Content and/or Information may be reverse-engineered, modified, edited, reproduced, republished, translated into any language or computer language, re-transmitted in any form or by any means, resold or redistributed unless expressly permitted by law or as expressly specified above. Unless specifically authorized by Digixito, you are not allowed to create, sell, offer for sale, alter, revise, reproduce, display, publicly perform, import, distribute, re transmit, or otherwise use the Content.",
        },
      ],
    },
    {
      title: "Limitations on How to Use the Website",
      listDetails: [
        {
          label:
            "You consent to the following limitations in addition to those already stated in these Terms of Use: “You shall not hide the origin of information submitted over the website.”",
        },
        {
          label:
            "You won’t post inaccurate or deceptive information on the website.",
        },
        {
          label:
            "You will not enter or upload information to the website that could be infected with viruses, Trojan horses, worms, time bombs, or other computer programming routines that are meant to harm, interfere with, intercept, or expropriate any system, the website, or Information, or that violates the rights of intellectual property holders, unless such use or access is expressly authorized by Digixito.",
        },
        {
          label:
            "A portion of the website is only accessible to Digixito customers",
        },
        {
          label:
            "You may not use or access the website or the Digixito Systems or Services in any way that, in the opinion of Digixito, adversely affects the functionality or performance of the Digixito Systems, Services, or the website or interferes with the ability of authorized parties to access the Digixito Systems, Services, or the website.",
        },
      ],
    },
    {
      title: "Links",
      description: [
        {
          label:
            "External Links: It’s possible for the website to link to outside websites and information (referred to collectively hereinafter as “Linked Sites”). These Linked Sites are only being made available to You as a convenience, and Digixito does not necessarily endorse the information found there. The correctness, accuracy, performance, or quality of any content, software, service, or application found at any Linked Site is not guaranteed by Digixito in any way. The availability of the Linked Sites, their content, or their activities are not under the control of Digixito. You do so at your own risk if you choose to access Linked Sites. You must also abide by all applicable policies and terms and conditions of use before using any linked websites, including among other things, the privacy statement of the Linked Site.",
        },
        {
          label:
            "External links. In the absence of a specific linkage agreement with Digixito, linking to any page of the website other than https://employvirtual.com through a plain text link is absolutely forbidden. It is not permitted for any website or other devices to connect to https://employvirtual.com or any page found there.",
        },
      ],
    },
    {
      title: "Termination",
      listDetails: [
        {
          label:
            "by enclosing the Content in a browser or other boundary environment,",
        },
        {
          label:
            "indicating in any way that it, its goods, or any of its affiliates are endorsed by Digixito,",
        },
        {
          label:
            "misrepresenting any truth, including its connection to Digixito or any of its affiliates,",
        },
        {
          label: "falsely representing Digixito products or services,",
        },
        {
          label:
            "using a Digixito or any of its affiliates’ logo or mark without their express written consent from Digixito.",
        },
        {
          label:
            "You acknowledge that Digixito may, at any time and for any reason in its sole discretion, terminate or suspend Your use of the website, the Digixito Systems, Information, Services, and Content, even if access and use are still permitted to others. In the event of such suspension or dismissal, You must right away.",
        },
        {
          label: "you should stop using the website.",
        },
        {
          label:
            "l any copies you may have made of any parts of the Content should be destroyed. After such termination, suspension, or discontinuation, accessing the website, the Digixito Systems, information, or services shall be deemed an act of trespass. Additionally, you acknowledge that Digixito won’t be held responsible for any suspension or termination of your account.Your access to the website, the Digixito Systems, Information and/or the Services.",
        },
      ],
    },
    {
      title: "Disclaimer of Warranties",
      description: [
        {
          label:
            "Digixito makes no representations about the results to be obtained from using the website, the Digixito systems, the services, the information or the content. The use of same is at your own risk. The website, the Digixito systems, the information, the services and the content are provided on an “As is” basis. Digixito, its licensors, and its suppliers, to the fullest extent permitted by law, disclaim all warranties, either express or implied, statutory or otherwise, including but not limited to, the implied warranties of merchantability, non-infringement of third party rights, and fitness for a particular purpose. Digixito and its affiliates, licensors and suppliers make no representations or warranties concerning the accuracy, completeness, security or timeliness of the content, information or services provided on or through the use of the website or the Digixito systems. No information obtained by you from the website shall create any warranty not expressly stated by Digixito in these terms of use.",
        },
      ],
    },
    {
      title: "Limitation of Liability",
      description: [
        {
          label:
            "To the extent permitted by law, in no event shall Digixito, its affiliates, licensors, suppliers or any third parties mentioned at the website be liable for any incidental, direct, indirect, exemplary, punitive and/or consequential damages, lost profits, and/or damages resulting from lost data or business interruption resulting from the use of and/or inability to use the website, the Digixito systems, information, services or the content whether based on warranty, contract, tort, delict, or any other legal foundation, and whether or not Digixito is advised of the possibility of such damages. To the extent permitted by law, the remedies stated for you in these terms of use are exclusive and are limited to those expressly provided for herein.",
        },
      ],
    },
    {
      title: "Compliance With Law including Export Control",
      description: [
        {
          label:
            "You agree to use the website in strict compliance with all applicable laws, rulings, and regulations and in a fashion that does not, in the sole judgment of Digixito, negatively reflect on the goodwill or reputation of Digixito and You shall take no action which might cause Digixito to be in breach of any laws, rulings or regulations applicable to Digixito.",
        },
        {
          label:
            "Digixito and the website are based in India, the United States and certain other jurisdictions control the export of services and information. You agree to comply with all such applicable restrictions and not to export or re-export the Content (including any software or the Services) to countries or persons prohibited under India or other applicable export control laws or regulations. If You access and download the Content (including any software or the Services) or Information, You represent that You are not in a country where such export is prohibited or are not a person or entity to which such export is prohibited. You are solely responsible for compliance with the laws of Your local jurisdiction and any other applicable laws regarding the import, export, or re-export of the Content (including any software or the Services).",
        },
      ],
    },
    {
      title: "Governing Law and Jurisdiction",
      description: [
        {
          label:
            "To the fullest extent permitted by law, these Terms of Use are governed by the internal laws of India and courts in Noida, India will have jurisdiction.",
        },
      ],
    },
    {
      title: "General",
      description: [
        {
          label:
            "You may not assign these Terms of Use or any of Your interests, rights or obligations under these Terms of Use. If any provision of these Terms of Use shall be found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms of Use, which shall remain in full force and effect. No waiver of any of these Terms of Use shall be deemed a further or continuing waiver of such term or condition or any other term or condition. You may preserve these Terms of Use in written form by printing them for Your records, and You waive any other requirement for these Terms of Use to be proved by means of a written document.",
        },
      ],
    },
  ];
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid size={8}>
            {data.map((val, i) => (
              <Stack
                spacing={3}
                key={i}
                id={val.title.toLowerCase().replace(/\s+/g, "-")}
                sx={{
                  mt: i === 0 ? 0 : 10,
                  mb: 6,
                  scrollMarginTop: "140px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontSize: { xs: 32, md: 42 },
                    fontWeight: 700,
                    color: COLORS.TEXT_BLACK,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: 60,
                      height: 4,
                      bgcolor: COLORS.PRIMARY,
                      borderRadius: 2,
                    },
                  }}
                >
                  {val.title}
                </Typography>
                {val.description &&
                  val.description.map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        color: "text.secondary",
                        fontSize: 18,
                        lineHeight: 1.8,
                        textAlign: "justify",
                      }}
                    >
                      {item.label}
                    </Typography>
                  ))}

                {val.listDetails && (
                  <List sx={{ pt: 1 }}>
                    {val.listDetails.map((listitem, index) => (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{ mb: 2, alignItems: "flex-start" }}
                      >
                        <ListItemAvatar sx={{ minWidth: 32, mt: 0.5 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor: COLORS.PRIMARY,
                              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={listitem.label}
                          slotProps={{
                            primary: {
                              sx: {
                                fontFamily: poppins.style.fontFamily,
                                fontSize: 17,
                                color: "text.secondary",
                                lineHeight: 1.6,
                              },
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </Stack>
            ))}
          </Grid>
          <Grid size={4}>
            <Box
              sx={{
                position: "sticky",
                top: "0px",
                p: 4,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                // maxHeight: "calc(100vh - 160px)",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 800,
                  mb: 1,
                  color: COLORS.TEXT_BLACK,
                  letterSpacing: -0.5,
                  fontSize: 20,
                  textTransform: "uppercase",
                  opacity: 0.8,
                }}
              >
                Content Overview
              </Typography>
              <List sx={{ p: 0 }}>
                {data.map((val, i) => {
                  const targetId = val.title.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <ListItemButton
                      key={i}
                      onClick={() => handleScroll(targetId)}
                      sx={{
                        p: 0,
                        // mb: 1,
                        borderRadius: 2,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.04)",
                          transform: "translateX(8px)",
                          color: COLORS.PRIMARY,
                          "& .toc-dot": {
                            transform: "scale(1.5)",
                            bgcolor: COLORS.PRIMARY,
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          color: "inherit",
                        }}
                      >
                        <Box
                          className="toc-dot"
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor: "rgba(0,0,0,0.2)",
                            transition: "all 0.3s ease",
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: poppins.style.fontFamily,
                            fontSize: 15,
                            fontWeight: 600,
                            lineHeight: 1.2,
                          }}
                        >
                          {val.title}
                        </Typography>
                      </Box>
                    </ListItemButton>
                  );
                })}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Introduction;
