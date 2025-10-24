import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { PARTNER_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const PartnerCard = ({ img, name }: PARTNER_CARD_PROPS) => {
  return (
    <Box>
      <Box
        sx={{
          ":hover": {
            ".img": {
              opacity: 0,
              scale: 1.1,
            },
            ".text": {
              opacity: 1,
            },
          },
          //   width: 100,
          height: 100,
          boxShadow: "rgba(149, 157, 165, 0.15) 0px 8px 24px",
          textAlign: "center",
          position: "relative",
          //   p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={img}
          alt=""
          className="img"
          height={80}
          style={{ transition: "0.5s ease all" }}
        />
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: 12,
            color: COLORS.TEXT_BLACK,
            fontFamily: poppins.style.fontFamily,
            position: "absolute",
            width: "100%",
            height: "20px",
            lineHeight: "20px",
            top: "40px",
            fontWeight: 600,
            opacity: 0,
            transform: "translateX(-50%,50%)",
            transition: "0.5s ease all",
          }}
          className="text"
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default PartnerCard;
