import { Col, Card, Button } from "react-bootstrap";
import medialuna from "../../../assets/mljyq.webp"
const CardProducto = () => {
 
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img src={medialuna} alt="cafe" className="card-img-top-nueva" />
        </div>
        <Card.Body>
        <Card.Title className="primary-font">Capuchino</Card.Title>
        <Card.Text>
          Descripción: Descripción: Espuma de leche cremosa sobre un espresso fuerte. <br className="mb-2"/> 
          <span className="fw-bold">Precio: $350</span></Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
        <Button variant='success' className="me-2" >Ver más</Button>
      </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;