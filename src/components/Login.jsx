import React, { useState } from 'react';
import { dispararSweetSucces, dispararSweetError } from "../assets/SweetAlert";
import { Link, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../contexts/LoginContext';
import { crearUsuario, loginEmailPass } from '../auth/firebase';
import BotonStyled from './styled components/BotonStyled';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/Login.css";

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const { login, user, logout } = useLoginContext();
  const navigate = useNavigate();

  const iniciarSesion = (e) => {
    e.preventDefault();
    loginEmailPass(usuario, password).then((user) => {
      login(usuario);
      dispararSweetSucces("Has iniciado sesion correctamente!")
    }).catch((error) => {
      if (error.code === "auth/invalid-email") {
        dispararSweetError("Credenciales Incorrectas!")
      } if (error.code === "auth/invalid-credential") {
        dispararSweetError("Credenciales Incorrectas!")
      }
      if (error.code === "auth/missing-password") {
        dispararSweetError("Ingrese su contraseña primero!")
      }
    })
  };

  function registrarUsuario(e) {
    e.preventDefault();
    crearUsuario(usuario, password).then((user) => {
      login(usuario);
      dispararSweetBasico("Has iniciado sesion correctamente!")
    }).catch((error) => {
      if (error.code === "auth/invalid-email")
        dispararSweetBasico("Credenciales Incorrectas!")
    })
  }

  const handleSubmit2 = (e) => {
    logout();
  };

  if (user) {
    return (
      <div className="root">
        <form onSubmit={handleSubmit2} style={{ margin: "4%" }}>
          <div className="btnLogueo">
            <BotonStyled titulo="Cerrar Sesión" type="submit"
              $bg="rgb(99, 64, 255)" $textColor="rgba(255, 255, 255, 1)"
              $hoverBg="rgba(132, 0, 255, 1)" $hoverTextColor="rgba(0, 0, 0, 1)" />
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="root">
      <form className="formLogin" onSubmit={iniciarSesion}>
        <fieldset>
          <legend className="tituloLogin">Iniciar sesión con mail y contraseña</legend>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btnLogueo">
            <BotonStyled titulo="Iniciar sesión" type="submit"
              $bg="rgb(99, 64, 255)" $textColor="rgba(255, 255, 255, 1)"
              $hoverBg="rgba(132, 0, 255, 1)" $hoverTextColor="rgba(0, 0, 0, 1)" />
          </div>
        </fieldset>
      </form>
      <div className="btnAlternar">
        <p style={{ backgroundColor: "rgba(0, 0, 0, 0.82)" }}>No tienes una cuenta?</p>
        <Link to="/registrarse"><BotonStyled titulo="Registrarse" type="submit"
          $bg="rgba(255, 0, 0, 1)" $textColor="rgba(255, 255, 255, 1)"
          $hoverBg="rgba(255, 123, 0, 1)" $hoverTextColor="rgba(0, 0, 0, 1)" />
        </Link>
      </div>
    </div>
  );
}
export default Login;
