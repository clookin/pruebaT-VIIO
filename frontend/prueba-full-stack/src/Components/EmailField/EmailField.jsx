import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const EmailField = ({ value, handleChange, errors }) => {
  return (
    <TextField
    size="small"
      name="email"
      label="Correo"
      type="email"
      variant="outlined"
      placeholder='Ejemplo@ejemplo.com'
      fullWidth
      onChange={handleChange}
      autoComplete="email"
      value={value}
      error={Boolean(errors)}
      helperText={errors}
    />
  );
};

EmailField.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.string,
};

export default EmailField;