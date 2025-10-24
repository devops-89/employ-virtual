import { Box } from "@mui/material";
import React from "react";
import Herosection from "./hero-section";
import WhyEmploy from "./why-employ";
import Employ360 from "./360-employ";
import HiringRemote from "./hiring-remote";
import BestSuited from "./best-suited";
import Partners from "../../widgets/partners";

const HomeLayout = () => {
  return (
    <Box>
      <Herosection />
      <WhyEmploy />
      <Employ360 />
      <HiringRemote />
      <BestSuited />
      <Partners />
    </Box>
  );
};

export default HomeLayout;
