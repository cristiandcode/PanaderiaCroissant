import { Button, Overlay } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const ItemProducto = ({producto}) => {
  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <OverlayTrigger  placement="top"
          overlay={<Tooltip id="tooltip-agregar">Editar producto</Tooltip>}>
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top"
          overlay={<Tooltip id="tooltip-agregar">Borrar producto</Tooltip>}>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
        </OverlayTrigger>
      </td>
    </tr>
  );
};

export default ItemProducto;