import { Box } from "@mui/material";
import Partners from "../../widgets/partners";
import Employ360 from "./360-employ";
import BestSuited from "./best-suited";
import Herosection from "./hero-section";
import HiringRemote from "./hiring-remote";
import WhyEmploy from "./why-employ";

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
