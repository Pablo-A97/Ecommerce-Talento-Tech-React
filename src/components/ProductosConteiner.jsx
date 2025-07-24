import React, { useEffect, useState } from 'react';
import Carrito from "./Carrito"
import { useProductosContext } from '../contexts/ProductosContext';
import CardProducto from './CardProducto';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/ProductoDetalle.css";
//import { Helmet } from 'react-helmet';

function ProductosConteiner() {
    const { productos, obtenerProductos, filtrarProducto } = useProductosContext();
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState("");

    //Paginacion
    const productosPorPagina = 8;
    const [paginaActual, setPaginaActual] = useState(1);
    // Calcular el índice de los productos a mostrar en la página actual
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);
    /////////////////////////////////////////////////////////////////////////////////////////

    {
        useEffect(() => {
            obtenerProductos().then((productos) => {
                setCargando(false)
            }).catch((error) => {
                setError("Hubo un problema al cargar los productos.")
                setCargando(false)
            })
        }, []);
    }

    useEffect(() => {
        filtrarProducto(filtro)
    }, [filtro])

    if (cargando) {
        return (
            <div id="root">
                <p className='cargando'>Cargando productos...</p>
            </div>)
    } else
        if (error) {
            return <p>{error}</p>
        } else {

            return (
                <>
                    <div className="root">
                        {/*<Helmet>
                            <title>Productos | Mi Tienda</title>
                            <meta name="description" content="Explora nuestra variedad de productos." />
                        </Helmet>*/}
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            className="buscador"
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                        />
                        <Row xs={1} md={2} lg={4} className="g-4">
                            {productosActuales.length > 0 ? productosActuales.map((producto) => (
                                <Col key={producto.id} className="d-flex justify-content-center">
                                    <CardProducto producto={producto} />
                                </Col>
                            )) : <></>}
                        </Row>
                    </div>
                    <div className="d-flex justify-content-center my-4"> {/*Componente de paginacion*/}
                        {Array.from({ length: totalPaginas }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-secondary"}`}
                                onClick={() => cambiarPagina(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            )
        }
}

export default ProductosConteiner