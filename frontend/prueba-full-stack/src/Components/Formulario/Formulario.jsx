// import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  // FilledInput,
  // FormControl,
  // FormHelperText,
  Grid,
  // IconButton,
  // InputAdornment,
  // InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./Formulario.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EmailField from "../EmailField/EmailField";
import PasswordField from "../PasswordField/PasswordField";

const validatePassword = (password)=>({
      length: password.length >= 8,
      digit: /\d/.test(password),
      lowerCase: /[a-z]/.test(password),
      upperCase: /[A-Z]/.test(password),
    });
    
    const Formulario = () => {
      const navigate = useNavigate();
      const [showPassword, setShowPassword] = useState(false);
      const [isPasswordFocused, setIsPasswordFocused] = useState(false);
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
    onSubmit: async (data) => {
      try {
        axios.post('http://localhost:3000/api/register',data)
        .then(res =>console.log(res))
      //   .catch(err=>(console.log(err, data)))
      // }
        // const { email, password } = data;
        // const user = { email, password };
        // const res = await
        // axios.post("http://localhost:3000/api/auth/login", user);
        //     localStorage.setItem("token", res.data.data.token);
        navigate("/home");
      } catch (err){
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
      <Typography color="primary" variant="h2" align="center">
        Registro
      </Typography>
      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item xs={12} md={8} lg={5}>
            <TextField
              name="fullName"
              label="Ingrese su nombre"
              variant="filled"
              fullWidth
              sx={{ width: "100%" }}
              onChange={handleChange}
              autoComplete="fullName"
              value={values.fullName}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={5}>
              <EmailField value={values.email} handleChange={handleChange} errors={errors.email} />
          </Grid>
          <Grid item xs={12} md={8} lg={5}>
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
            {/* <FormControl
              fullWidth
              variant="filled"
              error={Boolean(errors.password)}
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={passwordChange}
                name="password"
                value={values.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>{errors.password}</FormHelperText>
            </FormControl>
            <ul>
              <li
                style={
                  passwordIsValid.length
                    ? { display: "none" }
                    : { color: "red" }
                }
              >
                La contraseña debe tener al menos 8 caracteres
              </li>
              <li
                style={
                  passwordIsValid.digit ? { display: "none" } : { color: "red" }
                }
              >
                La contraseña debe tener al menos 1 dígito
              </li>
              <li
                style={
                  passwordIsValid.lowerCase
                    ? { display: "none" }
                    : { color: "red" }
                }
              >
                La contraseña debe tener al menos 1 letra minúscula
              </li>
              <li
                style={
                  passwordIsValid.upperCase
                    ? { display: "none" }
                    : { color: "red" }
                }
              >
                La contraseña debe tener al menos 1 letra mayúscula
              </li>
            </ul> */}
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ bgcolor: 'grey.900', '&:hover': { bgcolor: 'grey.800' }}}>
          Registrar
        </Button>
      </form>
    </>
  );
};

export default Formulario;
