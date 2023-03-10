import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editarProductoAction } from "../actions/productosActions/editarProductosAction.js"
import { useNavigate } from "react-router-dom"

const EditarProducto = () => {
   const [producto, setProducto] = useState({ nombre: "", precio: "" })
   const productoEditar = useSelector((state) => state.productos.productoEditar)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   useEffect(() => {
      setProducto(productoEditar)
   }, [productoEditar])

   const onChangeFormulario = (e) => {
      setProducto({ ...producto, [e.target.name]: e.target.value })
   }
   const submitEditarProducto = (e) => {
      e.preventDefault()
      dispatch(editarProductoAction(producto))
      navigate("/")
   }

   return (
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="card">
               <div className="card-body">
                  <h2 className="text-center mb-4 font-weight-bold">
                     Editar Producto
                  </h2>

                  <form onSubmit={submitEditarProducto}>
                     <div className="form-group">
                        <label htmlFor="">Nombre Producto</label>
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Nombre Producto"
                           name="nombre"
                           value={producto.nombre}
                           onChange={onChangeFormulario}
                        />
                     </div>

                     <div className="form-group">
                        <label htmlFor="">Precio Producto</label>
                        <input
                           type="number"
                           className="form-control"
                           placeholder="Nombre Producto"
                           name="precio"
                           value={producto.precio}
                           onChange={onChangeFormulario}
                        />
                     </div>

                     <button
                        type="submit"
                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                     >
                        Guardar Cambios
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default EditarProducto
