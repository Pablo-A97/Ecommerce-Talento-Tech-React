import BotonStyled from "./styled components/BotonStyled"

function CarritoCard({ productos, funcionDisparadora }) {


    function borrarDelCarrito() {
        funcionDisparadora(productos.id)
    }

    const subTotal = productos.cantidad * productos.price

    return (
        <div key={productos.id} className="carritoCard">
            <div style={{ width: "25%" }}>
                <img className="carritoImagen" src={productos.imagen}></img>
            </div>
            <div style={{ width: "45%" }}>
                <h3 className="tituloCarrito">{productos.name}</h3>
            </div>
            <div style={{ width: "10%" }}>
                <span className="cantidadCarrito">Cantidad:<br /> {productos.cantidad}</span>
            </div>
            <div style={{ width: "10%" }}>
                <span className="precioCarrito">Precio Total:<br /> $ {subTotal.toFixed(2)}</span>
            </div>
            <div style={{ width: "10%" }}>
                <BotonStyled titulo="X" onClick={borrarDelCarrito}
                    $bg="rgba(255, 255, 255, 1)" $textColor="rgba(0, 0, 0, 1)"
                    $hoverBg="rgba(255, 0, 0, 1)" $hoverTextColor="rgba(255, 255, 255, 1)" />
            </div>
        </div>
    )
}

export default CarritoCard