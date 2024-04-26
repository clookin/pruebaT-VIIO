import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Typography color='primary'variant='h2' align="center">Login</Typography>
      <form className="form-container">
        <Grid container direction='row' alignItems="center" justifyContent="center" spacing={2} >
          <Grid item xs={12} md={8} lg={5}>
            <TextField
              required
              id="filled-required"
              label="Ingrese su nombre"
              variant="filled"
              fullWidth
              sx={{width:'100%'}}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={5}>
            <TextField
              id="filled-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={8} lg={5}>
            <TextField
              label="Correo"
              type="email"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={8} lg={5}>
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
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
            </FormControl>
          </Grid>
        </Grid>
        <Button type='submit' variant="outlined" >Ingresar</Button>
      </form>
    </>
  );
};

export default Formulario;
