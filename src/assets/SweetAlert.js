import Swal from "sweetalert2"

export function dispararSweetCat(titulo) {
  Swal.fire({
    title: titulo,
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
    backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `
  });
}

export function dispararSweetSucces(titulo) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: titulo,
    showConfirmButton: false,
    timer: 1500
  });
}

export function dispararSweetError(titulo) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: titulo,
  });
}

export function dispararSweetBasico(titulo) {
  Swal.fire(titulo)
}

export async function dispararSweetConfirmacion(titulo) {
 const confirmacion = await Swal.fire({
    title: titulo,
    text: "Esta acción no se puede revertir",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si, eliminar!"
  });

  return confirmacion.isConfirmed;
}