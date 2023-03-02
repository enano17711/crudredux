import {
   COMENZAR_DESCARGA_PRODUCTOS,
   DESCARGA_PRODUCTOS_ERROR,
   DESCARGA_PRODUCTOS_EXITO,
} from "../../types/index.js"
import clienteAxios from "../../config/axios.js"

export function obtenerProductosAction() {
   return async (dispatch) => {
      dispatch(descargarProductos())
      try {
         const data = (await clienteAxios.get("/productos")).data
         dispatch(descargarProductosExitosa(data))
      } catch (e) {
         dispatch(descargarProductosError())
      }
   }
}

const descargarProductos = () => ({
   type: COMENZAR_DESCARGA_PRODUCTOS,
   payload: true,
})
const descargarProductosExitosa = (data) => ({
   type: DESCARGA_PRODUCTOS_EXITO,
   payload: data,
})
const descargarProductosError = () => ({
   type: DESCARGA_PRODUCTOS_ERROR,
   payload: true,
})
