import { Button, Overlay } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { eliminarProductoAPI, listarProductos } from "../../helpers/queries.js";
import Swal from "sweetalert2";
const ItemProducto = ({producto, setProductos}) => {
  const borrarProducto = () =>{
    Swal.fire({
  title: "¿Estas seguro de borrar el producto?",
  text: "No podras revertir este paso",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Borrar",
  cancelButtonText: "Cancelar"
}).then(async (result) => {
  if (result.isConfirmed) {
    const respuesta = await eliminarProductoAPI(producto.id)
    if(respuesta.status === 200){
      Swal.fire({
        title: "Producto eliminado",
        text: "El producto fue eliminado correctamente",
        icon: "success"
      });
      //Actualizar la tabla
      //pedir los datos actualizados a la api
       const respuestaListaProductos = await listarProductos()
       if(respuestaListaProductos.status === 200){
        const datosActualizados = await respuestaListaProductos.json();
        //actualizar el state de productos
        setProductos(datosActualizados);
      }
    }else{
      Swal.fire({
        title: "Error al eliminar el producto",
        text: "El producto no pudo ser eliminado",
        icon: "error"
      });
    }
  }
});
  }
  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center img-tabla-producto">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center ">
        <OverlayTrigger  placement="top"
          overlay={<Tooltip id="tooltip-agregar">Editar producto</Tooltip>}>
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top"
          overlay={<Tooltip id="tooltip-agregar">Borrar producto</Tooltip>}>
        <Button variant="danger">
          <i className="bi bi-trash" onClick={borrarProducto}></i>
        </Button>
        </OverlayTrigger>
      </td>
    </tr>
  );
};

export default ItemProducto;