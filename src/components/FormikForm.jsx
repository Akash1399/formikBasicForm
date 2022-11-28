import React from "react";
import { useFormik } from "formik";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
} from "@mui/material";
import { validate } from "./Validation";

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      condition: false,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h5>Enter First Name</h5>
      <TextField
        size="small"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      {formik.errors.firstName ? (
        <div style={{ color: "red" }}>{formik.errors.firstName}</div>
      ) : null}
      <h5>Enter Last Name</h5>
      <TextField
        size="small"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      {formik.errors.lastName ? (
        <div style={{ color: "red" }}>{formik.errors.lastName}</div>
      ) : null}
      <h5>Enter Email</h5>
      <TextField
        size="small"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      <div>
        <h5>Enter Password</h5>
        <TextField
          size="small"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
      </div>
      <div>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        {formik.errors.gender ? (
          <div style={{ color: "red" }}>{formik.errors.gender}</div>
        ) : null}
      </div>
      <div>
        <FormControlLabel
          value={formik.values.condition}
          name="condition"
          control={<Checkbox onChange={formik.handleChange} />}
          label="Agree To Terms and Conditions"
        />
        {formik.errors.condition ? (
          <div style={{ color: "red" }}>{formik.errors.condition}</div>
        ) : null}
      </div>
      <Button type="submit" variant="contained">
        SUBMIT
      </Button>
    </form>
  );
}

export default FormikForm;
