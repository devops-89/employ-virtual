"use client";
import { countries } from "@/assets/generic-array";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import React from "react";

const Form = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={7}>
          <Grid size={6}>
            <TextField
              variant="standard"
              fullWidth
              label="Name*"
              placeholder="Your Name"
            />
          </Grid>
          <Grid size={6}>
            <MuiTelInput
              fullWidth
              label="Contact Number"
              variant="standard"
              placeholder="Enter Your 10 Digit Number"
              defaultCountry="US"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              variant="standard"
              fullWidth
              label="Email*"
              placeholder="Enter Email Address"
            />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              sx={{ width: "100%" }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <Box
                    key={key}
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...optionProps}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      alt=""
                    />
                    {option.label}
                  </Box>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  slotProps={{
                    htmlInput: {
                      ...params.inputProps,
                      autoComplete: "new-password",
                    },
                  }}
                  variant="standard"
                  fullWidth
                  placeholder="Select Your Country"
                />
              )}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              variant="standard"
              fullWidth
              label="Brand Name*"
              placeholder="Enter Brand Name"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              variant="standard"
              fullWidth
              label="Nature of Business*"
              placeholder="Ex. Manufacturer"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              variant="standard"
              fullWidth
              label="Category"
              placeholder="Ex. Apparel"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              variant="standard"
              fullWidth
              label="Current Sales Figure"
              placeholder="Enter number of SKU sold online per day"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              variant="standard"
              fullWidth
              label="Average Sales Price"
              placeholder="Enter ASP/ product"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              variant="standard"
              fullWidth
              label="Target Sales"
              placeholder="Enter Daily sales you would like us to achieve"
            />
          </Grid>
        </Grid>
        <Button
          sx={{
            fontSize: 15,
            fontFamily: poppins.style.fontFamily,
            backgroundColor: COLORS.BLACK,
            color: COLORS.WHITE,
            textTransform: "initial",
            borderRadius: 0,
            width: 150,
            p: 1.5,
            mt: 3,
            ":hover": {
              color: COLORS.BLACK,
              backgroundColor: COLORS.TRANSPARENT,
            },
            border: "1px solid #000000",
          }}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default Form;
