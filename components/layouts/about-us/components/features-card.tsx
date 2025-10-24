import { COLORS } from "@/utils/enum";
import { fjalla, poppins } from "@/utils/fonts";
import { FOOTER_LINKS } from "@/utils/types";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

const FeaturesCard = ({ heading, data }: FOOTER_LINKS) => {
  return (
    <Box>
      <Stack direction={"row"} alignItems={"flex-start"} spacing={5}>
        <Stack direction="row" alignItems={"flex-end"}>
          <Typography
            sx={{
              color: COLORS.WHITE,
              fontFamily: fjalla.style.fontFamily,
              fontWeight: 600,
              fontSize: 35,
              textTransform: "uppercase",
            }}
          >
            {heading}
          </Typography>
          <Divider sx={{ borderColor: COLORS.WHITE,width:50 }} />
        </Stack>

        <List>
          {data.map((val, i) => (
            <ListItem key={i} disablePadding sx={{ pb: 1 }}>
              <ListItemText
                primary={val.label}
                slotProps={{
                  primary: {
                    fontSize: 15,
                    fontFamily: poppins.style.fontFamily,
                    color: COLORS.WHITE,
                    textAlign: "left",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
};

export default FeaturesCard;
