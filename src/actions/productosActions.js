import {AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO} from "../types/index.js";

export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch(agregarProducto())

        try {
            dispatch(agregarProductoExito(producto))
        } catch (e) {
            dispatch(agregarProductoError(true))
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
const agregarProductoError = () => {

}