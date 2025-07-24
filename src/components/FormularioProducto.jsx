import React, { useState } from 'react';
import { dispararSweetSucces } from "../assets/SweetAlert";
import { useLoginContext } from '../contexts/LoginContext';
import { Navigate } from 'react-router-dom';
import { useProductosContext } from '../contexts/ProductosContext';
import BotonStyled from "./styled components/BotonStyled";

function FormularioProducto({ }) {
    const { admin } = useLoginContext();
    const { agregarProducto } = useProductosContext();

    const [producto, setProducto] = useState({
        name: '',
        price: '',
        description: '',
        imagen: '',
    });

    const [errores, setErrores] = useState({
        name: '',
        price: '',
        description: '',
        imagen: '',
    });

    if (!admin) {
        return (<Navigate to="/login" replace />)
    }


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

    const handleSubmit2 = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            agregarProducto(producto).then((data) => {
                setProducto({ name: '', price: '', description: '', imagen: '', });
                setErrores({});
                dispararSweetSucces('Producto agregado correctamente');
            }).catch((error) => {
                dispararSweetBasico(error)
            })
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarProducto(producto);
        setProducto({ name: '', price: '', description: '' });
    };

    return (
        <div className="root">
            <form className="formAgregar" onSubmit={handleSubmit2}>
                <fieldset>
                    <legend className="tituloAgregar">Agregar Producto</legend>
                    <div className="divAgregar">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={producto.name || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="divAgregar">
                        <label>Cargar Imagen:</label>
                        <input
                            type="text"
                            name="imagen"
                            value={producto.imagen || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="divAgregar">
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
                    <div className="divAgregar">
                        <label>Descripción:</label>
                        <textarea
                            name="description"
                            value={producto.description || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="btnAgregar">
                        <BotonStyled titulo="Agregar producto" type="submit"
                            $bg="rgba(248, 217, 40, 1)" $textColor="rgba(0, 0, 0, 1)"
                            $hoverBg="rgba(255, 0, 157, 1)" $hoverTextColor="rgba(255, 255, 255, 1)" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default FormularioProducto;