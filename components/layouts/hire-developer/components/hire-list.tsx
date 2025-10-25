import { poppins } from "@/utils/fonts";
import { HIRE_LIST } from "@/utils/types";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const HireList = ({ heading, data }: HIRE_LIST) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: poppins.style.fontFamily,
          fontWeight: 600,
        }}
      >
        {heading}
      </Typography>

      <List>
        {data.map((val, i) => (
          <ListItem alignItems="flex-start" key={i}>
            <ListItemAvatar sx={{ minWidth: 20 }}>{i + 1}.</ListItemAvatar>
            <ListItemText
              primary={val.label}
              slotProps={{
                primary: {
                  fontSize: 16,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 400,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HireList;
