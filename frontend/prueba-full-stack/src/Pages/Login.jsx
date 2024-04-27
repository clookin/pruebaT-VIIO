import { useState } from 'react';
import Formulario from "../Components/Formulario/Formulario";
import LoginForm from "../Components/LoginForm/LoginForm";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <>
      {isLoginForm ? <LoginForm /> : <Formulario />}
      <button onClick={toggleForm}>
        {isLoginForm ? 'Ir a registro' : 'Ir a inicio de sesión'}
      </button>
    </>
  );
};

export default Login;