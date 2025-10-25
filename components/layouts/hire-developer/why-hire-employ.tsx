import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import HireList from "./components/hire-list";
import { useDetailsStore } from "@/store/useDetailsStore";
import { LIST } from "@/utils/types";

const WhyHireEmploy = () => {
  const { details } = useDetailsStore();
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {details?.details_list.map(
            (val: { heading: string; data: LIST[] }, i: number) => (
              <Grid
                size={6}
                key={i}
                sx={{
                  borderRight:
                    details?.details_list.length - 1 !== i
                      ? "1px solid #d7d7d7"
                      : "",
                }}
              >
                <HireList heading={val.heading} data={val.data} />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyHireEmploy;
