import React, { createContext, useState, useContext } from 'react';
import { dispararSweetError, dispararSweetSucces, dispararSweetConfirmacion } from "../assets/SweetAlert";

// Crear el contexto de autenticación
const ProductosContext = createContext();
export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [productoId, setProductoId] = useState([]);
  const [productosOriginales, setProductisOriginales] = useState([]);


  function obtenerProductos() {
    return (

      new Promise((res, rej) => {
        fetch('https://682fc2c9f504aa3c70f51bdf.mockapi.io/productos')
          .then((respuesta) => respuesta.json())
          .then((datos) => {
            console.log(datos)
            setProductos(datos)
            setProductisOriginales(datos)
            res(datos)
          })
          .catch((error) => {
            console.log("Error", error)
            rej(datos)
          })
      })
    )
  }

  function agregarProducto(producto) {
    return (
      new Promise(async (res, rej) => {
        try {
          const respuesta = await fetch('https://682fc2c9f504aa3c70f51bdf.mockapi.io/productos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(producto),
          });

          if (!respuesta.ok) {
            throw new Error('Error al agregar el producto.');
          }
          const data = await respuesta.json();
          console.log('Producto agregado:', data);
          res(data)
        } catch (error) {
          console.error(error.message);
          rej(error.message)
        }
      })
    )

  };

  function obtenerProductoId(id) {
    return (
      new Promise((res, rej) => {
        fetch('https://682fc2c9f504aa3c70f51bdf.mockapi.io/productos')
          .then((respuesta) => respuesta.json())
          .then((datos) => {
            const productoEncontrado = datos.find((item) => item.id === id)
            console.log(productoEncontrado)
            if (productoEncontrado) {
              setProductoId(productoEncontrado)
            } else {
              rej("Producto no encontrado")
            }
          })
          .catch((error) => {
            console.log("Error", error)
            rej("Hubo un problema al cargar los productos.")
          })
      }
      ))
  }

  function editarProducto(producto) {
    return (
      new Promise(async (res, rej) => {
        try {
          const respuesta = await fetch(`https://682fc2c9f504aa3c70f51bdf.mockapi.io/productos/${producto.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(producto),
          });
          if (!respuesta.ok) {
            throw new Error('Error al actualizar el producto.');
          }
          const data = await respuesta.json();
          res(data);
        } catch (error) {
          console.error(error.message);
          rej(error);
        }
      })
    )
  }

  async function eliminarProducto(id) {

    const confirmar = await dispararSweetConfirmacion('¿Estás seguro de eliminar?');
    if (confirmar) {
      return (
        new Promise(async (res, rej) => {
          try {
            const respuesta = await fetch(`https://682fc2c9f504aa3c70f51bdf.mockapi.io/productos/${id}`, {
              method: 'DELETE',
            });
            if (!respuesta.ok) throw new Error('Error al eliminar');
            dispararSweetSucces('Producto eliminado correctamente.');
            res(true);
          } catch (error) {
            console.error(error.message);
            dispararSweetError('Hubo un problema al eliminar el producto.');
            rej(error);
          }
        }))
    } else {
      return null;
    }
  }

  function filtrarProducto(filtro) {
    if (filtro.length < 0) {
      setProductos(productosOriginales);
      return;
    }

    const productosFiltrados = productosOriginales.filter((producto) =>
      producto.name.toLowerCase().includes(filtro.toLowerCase())
    );
    setProductos(productosFiltrados);
  }

  return (
    <ProductosContext.Provider value={{ obtenerProductos, productos, agregarProducto, obtenerProductoId, productoId, editarProducto, eliminarProducto, filtrarProducto }}>
      {children}
    </ProductosContext.Provider>);
}
export const useProductosContext = () => useContext(ProductosContext);