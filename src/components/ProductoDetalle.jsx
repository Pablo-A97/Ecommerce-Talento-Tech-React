import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetCat, dispararSweetError } from "../assets/SweetAlert";
import { CarritoContext, CarritoProvider } from "../contexts/CarritoContext";
import { useLoginContext } from "../contexts/LoginContext";
import { useProductosContext } from "../contexts/ProductosContext";
import BotonStyled from "./styled components/BotonStyled";

function ProductoDetalle({ }) {
    const navegar = useNavigate();
    const { admin } = useLoginContext();
    const { obtenerProductoId, productoId, eliminarProducto } = useProductosContext();
    const { agregarAlCarrito } = useContext(CarritoContext);

    const { id } = useParams()
    const [cantidad, setCantidad] = useState(1)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        obtenerProductoId(id).then(() => {
            setCargando(false);
        }).catch((error) => {
            if (error == "Producto no encontrado") {
                setError("Producto no encontrado");
            } if (error == "Hubo un problema al cargar los productos.") {
                setError("Hubo un problema al cargar los productos.");
            }
            setCargando(false);
        })
    }, [id]);

    function funcionCarrito() {
        if (cantidad < 1) return;
        dispararSweetCat("El producto se ha agregado con exito al carrito")
        agregarAlCarrito({ ...productoId, cantidad })
    }

    function sumarContador() {
        setCantidad(cantidad + 1)
    }

    function restarContador() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    function dispararEliminar() {
        eliminarProducto(id).then((res) => {
            if (res) {
                navegar("/productos")
            }
        }).catch((error) => {
            dispararSweetError("Hubo un problema al eliminar el producto" + error)
        })
    }

    return (
        <div key={productoId.id} className="root">
            <div className="producto">
                <div>
                    <h3 className="tituloProd">{productoId.name}</h3>
                </div>
                <div>
                    <img className="imagenProd" src={productoId.imagen}></img>
                </div>
                <div>
                    <p className="descripcionProd">{productoId.description}</p>
                </div>
                <div>
                    <p className="precio">${productoId.price}</p>
                </div>
                <div style={{ margin: "20px" }}>
                    <BotonStyled titulo="-" onClick={restarContador} />
                    <span className="contador">{cantidad}</span>
                    <BotonStyled titulo="+" onClick={sumarContador} />
                </div>
                <div style={{ margin: "20px" }}>
                    {admin ? <><Link to={"/admin/editarProducto/" + id} ><BotonStyled titulo="Editar Producto" /></Link>
                        <BotonStyled titulo="Eliminar Producto" onClick={dispararEliminar} /></>
                        : <BotonStyled titulo="Agregar al carrito" onClick={funcionCarrito} />}
                </div>
            </div>
        </div>
    )
}

export default ProductoDetalle