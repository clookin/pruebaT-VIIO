import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Button,
  // FormControl,
  // FormHelperText,
  Grid,
  // IconButton,
  // InputAdornment,
  // InputLabel,
  // OutlinedInput,
  Typography,
} from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import EmailField from "../EmailField/EmailField";
import PasswordField from "../PasswordField/PasswordField";
const validatePassword = (password) => ({
  length: password.length >= 8,
  digit: /\d/.test(password),
  lowerCase: /[a-z]/.test(password),
  upperCase: /[A-Z]/.test(password),
});
const LoginForm = () => {
  const navigate = useNavigate();
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState({
    length: false,
    digit: false,
    lowerCase: false,
    upperCase: false,
  });

  const handlePasswordFocus = () => setIsPasswordFocused(true);
  const handlePasswordBlur = () => setIsPasswordFocused(false);

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email no valido")
        .required("Por favor, ingresa un Email"),
      password: Yup.string().required("Por favor, ingresa una contraseña"),
    }),
    onSubmit: async (data) => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/login",
          data
        );
        localStorage.setItem("token", res.data.data.token);
        navigate("/home");
      } catch (err) {
        console.log(err);
      }
    },
  });
  const passwordChange = (event) => {
    // Actualiza el estado de Formik
    handleChange(event);
    setPasswordIsValid(validatePassword(event.target.value));
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const allValidationsPassed = Object.values(passwordIsValid).every(Boolean);
  return (
    <>
      <section className="login-form">
        <Typography
          className="login-form-title"
          variant="h2"
          sx={{ fontWeight: "bold", fontFamily: "Kulim Park, sans-serif" }}
          align="center"
        >
          MAYNOOTH
        </Typography>
        <form className="form-container" onSubmit={handleSubmit}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item xs={12} md={11} lg={11}>
              <EmailField
                value={values.email}
                handleChange={handleChange}
                errors={errors.email}
              />
            </Grid>
            <Grid item xs={12} md={11} lg={11}>
              <PasswordField
                value={values.password}
                handleChange={passwordChange}
                handleFocus={handlePasswordFocus}
                handleBlur={handlePasswordBlur}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
                errors={errors.password}
                showPassword={showPassword}
                passwordIsValid={passwordIsValid}
                allValidationsPassed={allValidationsPassed}
                isPasswordFocused={isPasswordFocused}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "grey.900", "&:hover": { bgcolor: "grey.800" } }}
          >
            Ingresar
          </Button>
        </form>
      </section>
    </>
  );
};
export default LoginForm;
