import HomeLayout from "@/components/layouts/home";
import { Box } from "@mui/material";
import { getMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("/");

export default function Home() {
  return (
    <Box>
      <HomeLayout />
    </Box>
  );
}
