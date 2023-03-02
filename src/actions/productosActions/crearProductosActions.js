import {
   AGREGAR_PRODUCTO,
   AGREGAR_PRODUCTO_ERROR,
   AGREGAR_PRODUCTO_EXITO,
} from "../../types/index.js"
import clienteAxios from "../../config/axios.js"
import Swal from "sweetalert2"

export function crearNuevoProductoAction(producto) {
   return async (dispatch) => {
      dispatch(agregarProducto())

      try {
         await clienteAxios.post("/productos", producto)
         dispatch(agregarProductoExito(producto))
         Swal.fire("Correcto", "El producto se agrego correctamente", "success")
      } catch (e) {
         dispatch(agregarProductoError(true))
         Swal.fire({
            icon: "error",
            title: "Hubo un error",
            text: "Hubo un error, intenta de nuevo",
         })
      }
   }
}

const agregarProducto = () => ({
   type: AGREGAR_PRODUCTO,
   payload: true,
})
const agregarProductoExito = (producto) => ({
   type: AGREGAR_PRODUCTO_EXITO,
   payload: producto,
})
const agregarProductoError = (estado) => ({
   type: AGREGAR_PRODUCTO_ERROR,
   payload: estado,
})