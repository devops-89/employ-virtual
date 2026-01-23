import { poppins } from "@/utils/fonts";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
  Box,
} from "@mui/material";


import React from "react";

const PersonalDataTable = () => {
  const data = [
    {
      activity: ["To register you as a new customer"],
      tod: ["Identity Data", "Contact Data"],
      basis: ["	Performance of a contract with you"],
    },
    {
      activity: [
        "To process and deliver your order including:",
        " Manage payments, fees and charges",
        "Collect and recover money owed to us",
      ],
      tod: [
        " Identity Data",
        "Contact Data",
        "Marketing and Communications Data",
      ],
      basis: [
        "Performance of a contract with you",
        "Necessary for our legitimate interests (to recover debts due to us)",
      ],
    },
    {
      activity: [
        "To manage our relationship with you which will include:",
        " Notifying you about changes to our terms or privacy policy",
        " Asking you to leave a review or take a survey",
      ],
      tod: [
        "Identity Data",
        " Contact Data",
        " Profile Data",
        " Biometric Data",
        "Marketing and Communications Data",
      ],
      basis: [
        " Performance of a contract with you",
        " Necessary to comply with a legal obligation",
        "Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)",
      ],
    },
    {
      activity: [
        "To enable you to partake in a prize draw, competition or complete a survey",
      ],
      tod: [
        "Identity Data  ",
        "Contact Data",
        " Profile Data",
        " Usage Data",
        "Marketing and Communications Data",
      ],
      basis: [
        "Performance of a contract with you",
        "Necessary for our legitimate interests (to study how customers use our products/services, to develop them and grow our business)",
      ],
    },
    {
      activity: [
        "To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)",
      ],
      tod: [" Identity Data", " Contact Data", "Technical Data"],
      basis: [
        "Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business re-organisation or group restructuring exercise)",
        " Necessary to comply with a legal obligation",
      ],
    },
    {
      activity: [
        "To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you",
      ],
      tod: [
        " Identity Data",
        "Contact Data",
        "Profile Data",
        "Usage Data",
        "Marketing and Communications Data",
        "Technical Data",
      ],
      basis: [
        "Necessary for our legitimate interests (to study how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy)",
      ],
    },
    {
      activity: [
        "To use data analytics to improve our website, products/services, marketing, customer relationships and experiences",
      ],
      tod: ["Technical Data", " Usage Data"],
      basis: [
        "Necessary for our legitimate interests (to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy)",
      ],
    },
    {
      activity: [
        "To make suggestions and recommendations to you about goods or services that may be of interest to you",
      ],
      tod: [
        " Identity Data",
        "Contact Data",
        "Technical Data",
        "Usage Data",
        "Profile Data",
      ],
      basis: [
        "Necessary for our legitimate interests (to develop our products/services and grow our business)",
      ],
    },
    {
      activity: [
        "To comply with applicable law, or for other purposes permitted by applicable law.",
      ],
      tod: [
        " Identity Data",
        "Contact Data",
        "Biometric Data",
        "Technical Data",
        " Usage Data",
        " Profile Data",
      ],
      basis: ["Legal compliance"],
    },
  ];
    return (
      <Box>
        <Typography sx={{ fontFamily: poppins.style.fontFamily,mb:2 }}>
          For the objectives listed in the above table, we could be required to
          disclose your personal information to the parties listed below.
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: 900,
                    fontSize: 14,
                    fontFamily: poppins.style.fontFamily,
                  }}
                >
                  Purpose/Activity
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 900,
                    fontSize: 14,
                    fontFamily: poppins.style.fontFamily,
                  }}
                >
                  Type of data
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 900,
                    fontSize: 14,
                    fontFamily: poppins.style.fontFamily,
                  }}
                >
                  Lawful basis for processing including basis of legitimate
                  interest
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={i}>
                  <TableCell align="left">
                    <List disablePadding>
                      {row.activity.map((text, j) => (
                        <ListItem key={j} disablePadding>
                          <Box
                            sx={{
                              fontSize: 16,
                              fontFamily: poppins.style.fontFamily,
                              mb: 2,
                            }}
                          >
                            {text}
                          </Box>
                        </ListItem>
                      ))}
                    </List>
                  </TableCell>
                  <TableCell align="center">
                    <List disablePadding>
                      {row.tod.map((text, j) => (
                        <ListItem key={j} disablePadding>
                          <Box
                            sx={{
                              fontSize: 16,
                              fontFamily: poppins.style.fontFamily,
                              mb: 2,
                            }}
                          >
                            {text}
                          </Box>
                        </ListItem>
                      ))}
                    </List>
                  </TableCell>
                  <TableCell align="right">
                    <List disablePadding>
                      {row.basis.map((text, j) => (
                        <ListItem key={j} disablePadding>
                          <Box
                            sx={{
                              fontSize: 16,
                              fontFamily: poppins.style.fontFamily,
                              mb: 2,
                            }}
                          >
                            {text}
                          </Box>
                        </ListItem>
                      ))}
                    </List>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
}


export default PersonalDataTable;
