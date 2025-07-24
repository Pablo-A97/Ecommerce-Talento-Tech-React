import { useState } from 'react';
import { crearUsuario, loginEmailPass } from '../auth/firebase';
import { useLoginContext } from '../contexts/LoginContext';
import { dispararSweetSucces, dispararSweetError } from "../assets/SweetAlert";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../styles/Login.css";
import BotonStyled from './styled components/BotonStyled';

function Registrarse() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const { login, user, logout } = useLoginContext();
    const navegar = useNavigate();

    function registrarUsuario(e) {
        e.preventDefault();
        crearUsuario(usuario, password).then((user) => {
            login(usuario)
            dispararSweetSucces("Cuenta creada correctamente!")
            if (user) {
                navegar("/")
            }
        }).catch((error) => {
            if (error.code == "auth/invalid-credential") {
                dispararSweetError("Credenciales incorrectas");
            } if (error.code == "auth/weak-password") {
                dispararSweetError("La contraseña debe tener al menos 6 caracteres");
            } if (error.code == "auth/email-already-in-use") {
                dispararSweetError("Ya existe una cuenta registrada para este email");
            } if (error.code == "auth/invalid-email") {
                dispararSweetError("Email invalido");
            }
        })
    }

    return (
        <div className="root">
            <form className="formRegistro" onSubmit={registrarUsuario}>
                <fieldset>
                    <legend className="tituloRegistro">Crear una cuenta nueva</legend>
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
                    <div className="btnRegistro">
                        <BotonStyled titulo="Registrarte" type="submit"
                            $hoverBg="rgba(255, 0, 0, 1)" $textColor="rgba(0, 0, 0, 1)"
                            $bg="rgba(255, 123, 0, 1)" $hoverTextColor="rgba(255, 255, 255, 1)" />
                    </div>
                </fieldset>
            </form>
            <div className="btnAlternar">
                <p style={{ backgroundColor: "rgba(0, 0, 0, 0.82)" }}>Ya tienes una cuenta?</p>
                <Link to="/login"><BotonStyled titulo="Iniciar sesión" type="submit"
                    $hoverBg="rgb(99, 64, 255)" $textColor="rgba(0, 0, 0, 1)"
                    $bg="rgba(132, 0, 255, 1)" $hoverTextColor="rgba(255, 255, 255, 1)" />
                </Link>
            </div>
        </div>
    )

}

export default Registrarse