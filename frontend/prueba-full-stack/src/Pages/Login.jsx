import { useState } from 'react';
import Formulario from "../Components/Formulario/Formulario";
import LoginForm from "../Components/LoginForm/LoginForm";
import './CSS/Login.css'

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <>
      <section className='container-form-login'>
      {isLoginForm ? <LoginForm /> : <Formulario />}
      <a onClick={toggleForm} className="btn-changer">
        {isLoginForm ? 'No tienes una cuenta?': 'Ya tienes una cuenta?'}
        {isLoginForm ? <strong> Registrate aquí</strong> : null}
        {isLoginForm ? null : <strong>  Ir a inicio de sesión</strong>}
      </a>
      </section>
    </>
  );
};

export default Login;