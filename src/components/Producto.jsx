import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { eliminarProductosAction } from "../actions/eliminarProductosAction.js"
import Swal from "sweetalert2"

const Producto = ({ producto }) => {
   const dispatch = useDispatch()

   const navigate = useNavigate()

   const redireccionarEdicion = (producto) => {
      navigate(`/productos/editar/${producto.id}`)
   }

   const confirmarEliminarProducto = (id) => {
      return Swal.fire({
         title: "Estas seguro?",
         text: "No puedes revertir la acción!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Si, eliminar!!!",
         cancelButtonText: "Cancelar",
      }).then((result) => {
         if (result.isConfirmed) dispatch(eliminarProductosAction(id))
      })
   }

   return (
      <tr>
         <td>{producto.nombre}</td>
         <td>
            <span className="font-weight-bold">$ {producto.precio}</span>
         </td>
         <td className="acciones">
            <button
               type="button"
               className="btn btn-primary mr-2"
               onClick={() => redireccionarEdicion(producto)}
            >
               Editar
            </button>
            <button
               type="button"
               className="btn btn-danger"
               onClick={() => confirmarEliminarProducto(producto.id)}
            >
               Eliminar
            </button>
         </td>
      </tr>
   )
}

export default Producto
