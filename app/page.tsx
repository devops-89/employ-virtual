import HomeLayout from "@/components/layouts/home";
import { getMetadata } from "@/utils/metadata";
import { Box } from "@mui/material";
import { Metadata } from "next";
export const metadata: Metadata = getMetadata("/");

export default function Home() {
  return (
    <Box>
      <HomeLayout />
    </Box>
  );
}
