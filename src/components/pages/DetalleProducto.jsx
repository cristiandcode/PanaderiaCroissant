import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProducto } from "../helpers/queries";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const cargarProducto = async () => {
      const respuesta = await obtenerProducto(id);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setProducto(datos);
      }
    };
    cargarProducto();
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
              alt={producto.nombreProducto}
              className="detalle-img"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{producto.nombreProducto}</Card.Title>
              <Card.Text>
                {producto.descripcion_amplia}
                <br />
                <br />
                <span className="primary-font fw-semibold">Categoría:</span>{" "}
                {producto.categoria}
                <br />
                <span className="primary-font fw-semibold">Precio:</span> ${producto.precio}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
