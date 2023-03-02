import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { crearNuevoProductoAction } from "../actions/productosActions/crearProductosActions.js"
import { useNavigate } from "react-router-dom"
import {
   mostrarAlertaAction,
   ocultarAlertaAction,
} from "../actions/alertasActions/alertaAction.js"

const NuevoProducto = () => {
   const [nombre, setNombre] = useState("")
   const [precio, setPrecio] = useState(0)

   const cargando = useSelector((state) => state.productos.loading)
   const error = useSelector((state) => state.productos.error)
   const alerta = useSelector((state) => state.alerta.alerta)

   const dispatch = useDispatch()
   const agregarProducto = (producto) =>
      dispatch(crearNuevoProductoAction(producto))

   const navigation = useNavigate()
   const submitNuevoProducto = (e) => {
      e.preventDefault()

      if (nombre.trim() === "" || precio <= 0) {
         const alerta = {
            msg: "Ambos campos son obligatorios",
            clases: "alert alert-danger text-center text-uppercase p-3",
         }
         dispatch(mostrarAlertaAction(alerta))
         return
      }
      dispatch(ocultarAlertaAction())

      agregarProducto({ nombre, precio })
      navigation("/")
   }

   return (
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="card">
               <div className="card-body">
                  <h2 className="text-center mb-4 font-weight-bold">
                     Agregar Nuevo Producto
                  </h2>

                  {alerta ? (
                     <p className={alerta.clases}>{alerta.msg}</p>
                  ) : null}

                  <form onSubmit={submitNuevoProducto}>
                     <div className="form-group">
                        <label htmlFor="">Nombre Producto</label>
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Nombre Producto"
                           name="nombre"
                           value={nombre}
                           onChange={(e) => setNombre(e.target.value)}
                        />
                     </div>

                     <div className="form-group">
                        <label htmlFor="">Precio Producto</label>
                        <input
                           type="number"
                           className="form-control"
                           placeholder="Nombre Producto"
                           name="precio"
                           value={precio}
                           onChange={(e) => setPrecio(Number(e.target.value))}
                        />
                     </div>

                     <button
                        type="submit"
                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                     >
                        Agregar
                     </button>
                  </form>

                  {cargando ? <p>Cargando...</p> : null}
                  {error ? (
                     <p className="alert alert-danger p-2 mt-4 text-center">
                        Hubo un error
                     </p>
                  ) : null}
               </div>
            </div>
         </div>
      </div>
   )
}

export default NuevoProducto
