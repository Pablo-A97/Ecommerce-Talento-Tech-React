import { useContext } from "react"
import "../styles/Carrito.css"
import CarritoCard from "./CarritoCard"
import { CarritoContext } from "../contexts/CarritoContext"
import { useLoginContext } from "../contexts/LoginContext"
import { Navigate } from "react-router-dom"
import BotonStyled from "./styled components/BotonStyled"
import { BiFontFamily } from "react-icons/bi"

function Carrito({ }) {

    const { user } = useLoginContext();
    const { productosCarrito, vaciarCarrito, borrarCarrito } = useContext(CarritoContext);
    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.price * producto.cantidad, 0
    )

    function funcionDisparadoraVaciar() {
        vaciarCarrito()
    }

    function funcionDisparadoraBorrar(id) {
        borrarCarrito(id)
    }

    if (!user) {
        return (<Navigate to={"/login"} replace />)
    }

    return (
        <div id="root">
            <div className="carritoContenedor">
                {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                    <>
                        <CarritoCard productos={producto} funcionDisparadora={funcionDisparadoraBorrar} />
                    </>
                )) : <span className="infoCarrito">Carrito vacio</span>}
                {total > 0 ?
                    <>
                        <span className="infoCarrito">Total a pagar: $ {total.toFixed(2)} </span>
                        <div className="botonVaciar">
                            <BotonStyled titulo="Vaciar carrito" onClick={funcionDisparadoraVaciar}
                                $bg="rgba(255, 255, 255, 1)" $textColor="rgba(0, 0, 0, 1)"
                                $hoverBg="rgba(255, 0, 0, 1)" $hoverTextColor="rgba(255, 255, 255, 1)" />
                        </div>
                    </>
                    : <></>}
            </div>
        </div>
    )
}
export default Carrito