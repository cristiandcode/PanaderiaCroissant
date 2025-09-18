    import { Container, Form, Button, FormGroup } from "react-bootstrap";

    const Login = () => {
    return (
        <Container className="my-5 mainSection">
        <h1 className="mb-5">Ingresá al sitio</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="Ej: juan@mail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Ingrese una contraseña" />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Text className="text-danger">Algun error</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
            Ingresar
            </Button>
        </Form>
        </Container>
    );
    };

    export default Login;
