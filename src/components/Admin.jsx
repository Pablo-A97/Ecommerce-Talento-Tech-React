import { Link, Navigate } from "react-router-dom"
import { useLoginContext } from "../contexts/LoginContext"
import BotonStyled from "./styled components/BotonStyled";
import "../index.css";

function Admin() {

    const { admin } = useLoginContext();

    if (!admin) {
        return (<Navigate to="/login" replace />)
    }

    return (
        <div className="root" >
            <div className="admin">
                <p className="tituloAdmin">Componente Administrador</p>
                <Link to="/admin/agregarProducto"><BotonStyled titulo="Agregar nuevo producto"
                    $bg="rgba(248, 217, 40, 1)" $textColor="rgba(0, 0, 0, 1)"
                    $hoverBg="rgba(255, 0, 157, 1)" $hoverTextColor="rgba(255, 255, 255, 1)" />
                </Link>
            </div>
        </div>
    )
}

export default Admin