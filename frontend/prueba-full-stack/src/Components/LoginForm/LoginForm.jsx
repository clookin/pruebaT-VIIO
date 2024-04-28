import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import {
  Button,
  Grid,
  Typography,
} from "@mui/material";
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
    // Hooks y funciones para manejar el estado y la lógica del formulario
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email no valido")
        .required("Por favor, ingresa un Email"),
      password: Yup.string().required("Por favor, ingresa una contraseña"),
    }),

    // Función para manejar el envío del formulario
    onSubmit: async (data) => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/login",
          data
        );
        localStorage.setItem("token", res.data.data.token);
        navigate("/home");
        enqueueSnackbar("Inicio de sesión exitoso", { variant: "success", autoHideDuration: 2000});
      } catch (err) {
        enqueueSnackbar("Credenciales incorrectas", { variant: "error", autoHideDuration: 2000 });
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
      <section className="login-form">
        <Typography
          className="login-form-title"
          variant="h3"
          sx={{ fontWeight: "bold", fontFamily: "Kulim Park, sans-serif" }}
          align="center"
        >
          MAYNOOTH
        </Typography>
        <form className="form-container-login" onSubmit={handleSubmit}>
          <div className="form-info">
          <p>INICIAR SESIÓN</p>
          </div>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            marginBottom={3}
            marginTop={5}
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
                showValidations={false}
              />
            </Grid>
            <Grid item xs={12} md={11} lg={11} marginTop={2} align="center">
            <Button
                type="submit"
                variant="contained"
                sx={{ bgcolor: "grey.900", "&:hover": { bgcolor: "grey.800" } }}
                disabled={!allFieldsFilled(values)}
              >
                Iniciar
              </Button>
            </Grid>
            <Grid item xs={12} md={11} lg={11} textAlign="center">
              <p>o</p>
            </Grid>
          <Grid item xs={12} md={11} lg={11} align="center">
              <Button
              disabled
              sx={{ width: "70%", color:'black',border:'1px solid black' }} size="small" variant="outlined" fontSize="small">
                Continuar con Google
              </Button>
            </Grid>
            <Grid item xs={12} md={11} lg={11} align="center">
              <Button
              disabled
              sx={{ width: "70%", color:'black',border:'1px solid black'}} size="small" variant="outlined" fontSize="small">
                Continuar con Facebook
              </Button>
            </Grid>
            </Grid>
        </form>
      </section>
    </>
  );
};
export default LoginForm;
