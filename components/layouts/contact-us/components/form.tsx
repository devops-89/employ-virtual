"use client";
import { countries } from "@/assets/generic-array";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import {
  AlertColor,
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  natureOfBusiness: Yup.string().required("Nature Of Business is Required"),
  brandName: Yup.string().required("Brand Name is Required"),
});

interface SnackbarState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

const Form = () => {
  const [snackbarOpen, setSnackbarOpen] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      contactNumber: "",
      email: "",
      country: "",
      brandName: "",
      natureOfBusiness: "",
      category: "",
      current_sales_figure: "",
      average_sales_price: "",
      target_sales: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error(
          "EmailJS credentials are not set in environment variables.",
        );
        setSnackbarOpen({
          open: true,
          message:
            "Sorry, there was an error sending your message. Please try again later.",
          severity: "error",
        });
        setSubmitting(false);
        return;
      }

      setSubmitting(true);

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
        .then(
          (response) => {
            setSnackbarOpen({
              open: true,
              message: "Your message has been sent successfully!",
              severity: "success",
            });
            resetForm();
          },
          (err) => {
            console.error("FAILED...", err);
            setSnackbarOpen({
              open: true,
              message:
                "Failed to send the message. Please check your connection or try again later.",
              severity: "error",
            });
          },
        )
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  const [phone, setPhone] = useState("");

  const phoneChangeHandler = (value: string, info: MuiTelInputInfo) => {
    setPhone(value);
    const validPhone = matchIsValidTel(value);
    if (validPhone) {
      formik.setFieldValue("contactNumber", value);
    } else {
      formik.setFieldError("contactNumber", "Invalid phone number");
    }
  };

  const [country, setCountry] = useState(null);

  const countryChangeHandler = (value: any) => {
    setCountry(value);
    if (value?.label) {
      formik.setFieldValue("country", value.label);
    } else {
      formik.setFieldError("country", "Country is required");
    }
  };

  return (
    <div>
      <Container maxWidth="xl">
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={7}>
            <Grid size={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Name*"
                placeholder="Your Name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid size={6}>
              <MuiTelInput
                fullWidth
                label="Contact Number"
                variant="standard"
                placeholder="Enter Your 10 Digit Number"
                defaultCountry="US"
                onChange={phoneChangeHandler}
                value={phone}
                error={
                  formik.touched.contactNumber &&
                  Boolean(formik.errors.contactNumber)
                }
                helperText={
                  formik.touched.contactNumber && formik.errors.contactNumber
                }
              />
            </Grid>
            <Grid size={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Email*"
                placeholder="Enter Email Address"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                    helperText={formik.touched.country && formik.errors.country}
                  />
                )}
                onChange={countryChangeHandler}
                value={country}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Brand Name*"
                placeholder="Enter Brand Name"
                id="brandName"
                value={formik.values.brandName}
                onChange={formik.handleChange}
                error={
                  formik.touched.brandName && Boolean(formik.errors.brandName)
                }
                helperText={formik.touched.brandName && formik.errors.brandName}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Nature of Business*"
                placeholder="Ex. Manufacturer"
                id="natureOfBusiness"
                value={formik.values.natureOfBusiness}
                onChange={formik.handleChange}
                error={
                  formik.touched.natureOfBusiness &&
                  Boolean(formik.errors.natureOfBusiness)
                }
                helperText={
                  formik.touched.natureOfBusiness &&
                  formik.errors.natureOfBusiness
                }
              />
            </Grid>
            <Grid size={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Category"
                placeholder="Ex. Apparel"
                id="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Current Sales Figure"
                placeholder="Enter number of SKU sold online per day"
                id="currentSalesFigure"
                value={formik.values.current_sales_figure}
                onChange={formik.handleChange}
                error={
                  formik.touched.current_sales_figure &&
                  Boolean(formik.errors.current_sales_figure)
                }
                helperText={
                  formik.touched.current_sales_figure &&
                  formik.errors.current_sales_figure
                }
              />
            </Grid>
            <Grid size={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Average Sales Price"
                placeholder="Enter ASP/ product"
                id="averageSalesPrice"
                value={formik.values.average_sales_price}
                onChange={formik.handleChange}
                error={
                  formik.touched.average_sales_price &&
                  Boolean(formik.errors.average_sales_price)
                }
                helperText={
                  formik.touched.average_sales_price &&
                  formik.errors.average_sales_price
                }
              />
            </Grid>
            <Grid size={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Target Sales"
                placeholder="Enter Daily sales you would like us to achieve"
                id="targetSales"
                value={formik.values.target_sales}
                onChange={formik.handleChange}
                error={
                  formik.touched.target_sales &&
                  Boolean(formik.errors.target_sales)
                }
                helperText={
                  formik.touched.target_sales && formik.errors.target_sales
                }
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
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={24} sx={{ color: COLORS.WHITE }} />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Form;
