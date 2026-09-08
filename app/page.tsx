import HomeLayout from "@/components/layouts/home";
import { Box } from "@mui/material";
import { pageMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageMetadata["/"].title,
  description: pageMetadata["/"].description,
};

export default function Home() {
  return (
    <Box>
      <HomeLayout />
    </Box>
  );
}
