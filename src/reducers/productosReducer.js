import {
   AGREGAR_PRODUCTO,
   AGREGAR_PRODUCTO_ERROR,
   AGREGAR_PRODUCTO_EXITO,
   COMENZAR_DESCARGA_PRODUCTOS,
   DESCARGA_PRODUCTOS_ERROR,
   DESCARGA_PRODUCTOS_EXITO,
   OBTENER_PRODUCTO_ELIMINAR,
   PRODUCTO_ELIMINADO_ERROR,
   PRODUCTO_ELIMINADO_EXITO,
} from "../types/index.js"

const initialState = {
   productos: [],
   productoEliminar: null,
   error: null,
   loading: false,
}

export default function (state = initialState, action) {
   switch (action.type) {
      case AGREGAR_PRODUCTO:
      case COMENZAR_DESCARGA_PRODUCTOS:
         return {
            ...state,
            loading: action.payload,
         }
      case AGREGAR_PRODUCTO_EXITO:
         return {
            ...state,
            productos: [...state.productos, action.payload],
            error: false,
            loading: false,
         }
      case AGREGAR_PRODUCTO_ERROR:
      case DESCARGA_PRODUCTOS_ERROR:
      case PRODUCTO_ELIMINADO_ERROR:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }
      case DESCARGA_PRODUCTOS_EXITO:
         return {
            ...state,
            error: false,
            loading: false,
            productos: action.payload,
         }
      case OBTENER_PRODUCTO_ELIMINAR:
         return {
            ...state,
            productoEliminar: action.payload,
         }
      case PRODUCTO_ELIMINADO_EXITO:
         return {
            productos: state.productos.filter(
               (producto) => producto.id !== state.productoEliminar
            ),
            productoEliminar: null,
         }
      default:
         return state
   }
}
