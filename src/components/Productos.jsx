import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { obtenerProductosAction } from "../actions/obtenerProductosAction.js"
import Producto from "./Producto.jsx"

const Productos = () => {
   const productos = useSelector((state) => state.productos.productos)
   const error = useSelector((state) => state.productos.error)
   const cargando = useSelector((state) => state.productos.loading)

   const dispatch = useDispatch()

   useEffect(() => {
      const cargarProductos = () => dispatch(obtenerProductosAction())
      cargarProductos()
   }, [])
   return (
      <>
         <h2 className="text-center my-5">Listado de Productos</h2>
         {error ? (
            <p className="font-weight-bold alert alert-danger text-center">
               Hubo un error
            </p>
         ) : null}
         {cargando ? (
            <p className="font-weight-bold alert alert-info text-center">
               Cargando...
            </p>
         ) : null}

         <table className="table table-striped">
            <thead className="bg-primary table-dark">
               <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Acciones</th>
               </tr>
            </thead>
            <tbody>
               {productos.length === 0 ? (
                  <tr>
                     <td>'No hay productos</td>
                  </tr>
               ) : (
                  productos.map((producto) => (
                     <Producto key={producto.id} producto={producto} />
                  ))
               )}
            </tbody>
         </table>
      </>
   )
}

export default Productos
