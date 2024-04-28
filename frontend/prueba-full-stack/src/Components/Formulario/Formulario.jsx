import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "./Formulario.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EmailField from "../EmailField/EmailField";
import PasswordField from "../PasswordField/PasswordField";
import { useSnackbar } from "notistack";

const validatePassword = (password) => ({
  length: password.length >= 8,
  digit: /\d/.test(password),
  lowerCase: /[a-z]/.test(password),
  upperCase: /[A-Z]/.test(password),
});

const Formulario = () => {
  // Hooks y funciones para manejar el estado y la lógica del formulario
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState({
    length: false,
    digit: false,
    lowerCase: false,
    upperCase: false,
  });

  // Funciones para manejar el enfoque del campo de contraseña
  const handlePasswordFocus = () => setIsPasswordFocused(true);
  const handlePasswordBlur = () => setIsPasswordFocused(false);

  // Configuración de Formik para el formulario
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Por favor, ingresa un Nombre"),
      email: Yup.string()
        .email("Email no valido")
        .required("Por favor, ingresa un Email"),
      password: Yup.string()
        .required("Por favor, ingresa una contraseña")
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .matches(/[0-9]/, "La contraseña debe tener al menos 1 dígito")
        .matches(/[a-z]/, "La contraseña debe tener al menos 1 letra minúscula")
        .matches(
          /[A-Z]/,
          "La contraseña debe tener al menos 1 letra mayúscula"
        ),
    }),
    // Función para manejar el envío del formulario
    onSubmit: async (data) => {
      try {
        axios
          .post("http://localhost:3000/api/register", data)
          .then((res) => console.log(res));
        navigate("/home");
        enqueueSnackbar("Registro exitoso", { variant: "success", autoHideDuration: 2000});
      } catch (err) {
        console.log(err);
      }
    },
  });
  // Función para manejar el cambio en el campo de contraseña
  const passwordChange = (event) => {
    // Actualiza el estado de Formik
    handleChange(event);
    setPasswordIsValid(validatePassword(event.target.value));
  };

  // Funciones para manejar el mostrar/ocultar la contraseña
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // Verificación de las validaciones de la contraseña
  const allValidationsPassed = Object.values(passwordIsValid).every(Boolean);

  // Verificación de que todos los campos estén llenos
  function allFieldsFilled(values) {
    return Object.values(values).every((value) => Boolean(value));
  }
  return (
    <>
      <section className="register-form">
        <Typography
          className="login-form-title"
          variant="h3"
          sx={{ fontWeight: "bold", fontFamily: "Kulim Park, sans-serif"}}
          align="center"
        >
          MAYNOOTH
        </Typography>
        <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-info">
          <p> REGÍSTRATE</p>
          </div>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            marginBottom={3}
            marginTop={1}
          >
            <Grid item xs={12} md={11} lg={11}>
              <TextField
              size="small"
                className="textfield"
                name="fullName"
                label="Nombre"
                variant="outlined"
                fullWidth
                sx={{ width: "100%" }}
                onChange={handleChange}
                autoComplete="fullName"
                value={values.fullName}
                error={Boolean(errors.fullName)}
                helperText={errors.fullName}
                placeholder="Steve Jobs"
              />
            </Grid>
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
                showValidations={true}
              />
            </Grid>
            <Grid item xs={12} md={11} lg={11} marginTop={2} align="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ bgcolor: "grey.900", "&:hover": { bgcolor: "grey.800" } }}
                disabled={!allFieldsFilled(values)}
              >
                Registrar
              </Button>
            </Grid>
            <Grid item xs={12} md={11} lg={11} textAlign="center">
              <p>o</p>
            </Grid>
            <Grid item xs={12} md={11} lg={11} align="center">
              <Button
              disabled
              sx={{ width: "70%", color:'black',border:'1px solid black' }} size="small" variant="outlined" fontSize="small">
                Registrar con Google
              </Button>
            </Grid>
            <Grid item xs={12} md={11} lg={11} align="center">
              <Button
              disabled
              sx={{ width: "70%", color:'black',border:'1px solid black'}} size="small" variant="outlined" fontSize="small">
                Registrar con Facebook
              </Button>
            </Grid>
          </Grid>
        </form>
      </section>
    </>
  );
};

export default Formulario;
