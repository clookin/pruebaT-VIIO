
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';

export default function PasswordField({ value, handleChange, handleFocus, handleBlur, handleClickShowPassword, handleMouseDownPassword, errors, showPassword, passwordIsValid, allValidationsPassed,isPasswordFocused,showValidations}) {
  return (
    <FormControl size='small' fullWidth variant="outlined" error={Boolean(errors)}>
      <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
        name="password"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
        label="Password"
      />
      <FormHelperText>{errors}</FormHelperText>
      {isPasswordFocused && passwordIsValid && showValidations &&(
        <ul className={`list-validate ${allValidationsPassed ? 'hide' : ''}`}>
          <li style={passwordIsValid.length ? { display: "none" } : { color: "3f51b5" }}>La contraseña debe tener al menos 8 caracteres</li>
          <li style={passwordIsValid.digit ? { display: "none" } : { color: "3f51b5" }}>La contraseña debe tener al menos 1 dígito</li>
          <li style={passwordIsValid.lowerCase ? { display: "none" } : { color: "3f51b5" }}>La contraseña debe tener al menos 1 letra minúscula</li>
          <li style={passwordIsValid.upperCase ? { display: "none" } : { color: "3f51b5" }}>La contraseña debe tener al menos 1 letra mayúscula</li>
        </ul>
      )}
    </FormControl>
  );
}

PasswordField.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleClickShowPassword: PropTypes.func.isRequired,
  handleMouseDownPassword: PropTypes.func.isRequired,
  errors: PropTypes.string,
  showPassword: PropTypes.bool.isRequired,
  passwordIsValid: PropTypes.shape({
    length: PropTypes.bool.isRequired,
    digit: PropTypes.bool.isRequired,
    lowerCase: PropTypes.bool.isRequired,
    upperCase: PropTypes.bool.isRequired,
  }).isRequired,
  allValidationsPassed: PropTypes.bool.isRequired,
  isPasswordFocused: PropTypes.bool.isRequired,
  showValidations: PropTypes.bool,
};

