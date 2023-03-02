import clienteAxios from "../config/axios.js"
import {
   OBTENER_PRODUCTO_ELIMINAR,
   PRODUCTO_ELIMINADO_ERROR,
   PRODUCTO_ELIMINADO_EXITO,
} from "../types/index.js"
import Swal from "sweetalert2"

export function eliminarProductosAction(id) {
   return async (dispatch) => {
      dispatch(obtenerProductoEliminar(id))

      try {
         await clienteAxios.delete(`/productos/${id}`)
         dispatch(eliminarProductoExito())
         Swal.fire("eliminado!", "El producto ah sido eliminado.", "success")
      } catch (e) {
         dispatch(eliminarProductoError())
      }
   }
}

const obtenerProductoEliminar = (id) => ({
   type: OBTENER_PRODUCTO_ELIMINAR,
   payload: id,
})
const eliminarProductoExito = () => ({
   type: PRODUCTO_ELIMINADO_EXITO,
})
const eliminarProductoError = () => ({
   type: PRODUCTO_ELIMINADO_ERROR,
})
