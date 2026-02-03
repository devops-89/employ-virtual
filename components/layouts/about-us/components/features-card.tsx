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
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "center", sm: "flex-start" }}
        spacing={{ xs: 2.5, sm: 5 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ mb: { xs: 1, sm: 0 } }}
        >
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
          <Divider
            sx={{
              borderColor: COLORS.WHITE,
              width: { xs: 30, sm: 50 },
              ml: 1,
            }}
          />
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
                    textAlign: { xs: "center", sm: "left" },
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
