import {
   COMENZAR_EDICION_PRODUCTO,
   OBTENER_PRODUCTO_EDITAR,
   PRODUCTO_EDITADO_ERROR,
   PRODUCTO_EDITADO_EXITO,
} from "../../types/index.js"
import clienteAxios from "../../config/axios.js"

export function editarProductosAction(producto) {
   return async (dispatch) => {
      dispatch(obtenerProductoEditarAction(producto))
   }
}

const obtenerProductoEditarAction = (producto) => ({
   type: OBTENER_PRODUCTO_EDITAR,
   payload: producto,
})

export function editarProductoAction(producto) {
   return async (dispatch) => {
      dispatch(editarProducto())

      try {
         const res = (
            await clienteAxios.put(`/productos/${producto.id}`, producto)
         ).data
         dispatch(editarProductoExito(producto))
      } catch (err) {
         dispatch(editarProductoError())
      }
   }
}

const editarProducto = () => ({
   type: COMENZAR_EDICION_PRODUCTO,
})
const editarProductoExito = (producto) => ({
   type: PRODUCTO_EDITADO_EXITO,
   payload: producto,
})
const editarProductoError = () => ({
   type: PRODUCTO_EDITADO_ERROR,
   payload: true,
})
