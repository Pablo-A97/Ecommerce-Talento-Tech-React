import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useLoginContext } from "../contexts/LoginContext";
import { useProductosContext } from "../contexts/ProductosContext";
import { ToastContainer, toast } from "react-toastify";
import "../styles/ProductoDetalle.css";
import BotonStyled from "./styled components/BotonStyled";

function FormularioEdicion({ }) {
    const { obtenerProductoId, productoId, editarProducto } = useProductosContext();
    const { admin } = useLoginContext();
    const { id } = useParams();
    const navegar = useNavigate();
    const [error, setError] = useState("");
    const [errores, setErrores] = useState({
        name: '',
        price: '',
        description: '',
        imagen: '',
    });

    const [producto, setProducto] = useState(productoId)

    if (!admin) {
        return (<Navigate to="/login" replace />)
    }


    useEffect(() => {
        obtenerProductoId(id).then(() => {
        }).catch((error) => {
            if (error == "Producto no encontrado") {
                setError("Producto no encontrado");
            } if (error == "Hubo un problema al cargar los productos.") {
                setError("Hubo un problema al cargar los productos.");
            }
        })
    }, [id]);

    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!producto.name.trim()) {
            nuevosErrores.name = 'El nombre es obligatorio.';
            dispararSweetBasico(`${nuevosErrores.name}`)
        }
        if (!producto.price || producto.price <= 0) {
            nuevosErrores.price = 'El precio debe ser mayor a 0.';
            dispararSweetBasico(`${nuevosErrores.price}`)
        }
        if (!producto.description.trim() || producto.description.length < 10) {
            nuevosErrores.description = 'La descripción debe tener al menos 10 caracteres.';
            dispararSweetBasico(`${nuevosErrores.description}`)
        }
        if (!producto.imagen.trim()) {
            nuevosErrores.imagen = 'La url no debe estar vacia';
            dispararSweetBasico(`${nuevosErrores.imagen}`)
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            editarProducto(producto).then((prod) => {
                toast.success('Producto actualizado correctamente.');
            }).catch((error) => {
                alert('Hubo un problema al actualizar el producto.');
            }).catch((error) => {
                dispararSweetBasico(error)
            })
        }

    };
    return (
        <div className="root">
            <form className="formEditar" onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="tituloEditar">Editar Producto</legend>
                    <div className="divEditar">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={producto.name || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="divEditar">
                        <label>Cargar Imagen:</label>
                        <input
                            type="text"
                            name="imagen"
                            value={producto.imagen || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="divEditar">
                        <label>Precio:</label>
                        <input
                            type="number"
                            name="price"
                            value={producto.price || ''}
                            onChange={handleChange}
                            required
                            min="0"
                        />
                    </div>
                    <div className="divEditar">
                        <label>Descripción:</label>
                        <textarea
                            name="description"
                            value={producto.description || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="btnEditar">
                        <BotonStyled titulo="Actualizar Producto" type="submit"
                            $bg="rgb(34, 255, 181)" $textColor="rgba(0, 0, 0, 1)"
                            $hoverBg="rgba(8, 48, 0, 1)" $hoverTextColor="rgba(255, 255, 255, 1)" />
                    </div>
                </fieldset>
            </form>
            <ToastContainer />
        </div>
    );
}

export default FormularioEdicion;