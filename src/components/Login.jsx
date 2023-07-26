import { useState, useEffect } from 'react'
import { loginService } from "../services/services";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentBody from './ContentBody';
import Header from './Header';
import '../css/login.css';

function Login({ logged, handleSession }) {
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleChange = (e) => {
        e.target.id === 'formBasicUser' ? setUser(e.target.value) : setPass(e.target.value);
    }

    //Cambio el estado del disabled del submit si ambos campos fueron completados
    useEffect(() => {
        if (user.length > 0 && pass.length > 0) setSubmitDisabled(false);
        else setSubmitDisabled(true);
    }, [user, pass])

    const loginResponse = async () => {
        const response = await loginService(user, pass);
        console.log('response', response);
        if (response.codigo === 200) {
            handleSession(true, response.apiKey);
        }
        else {
            //TODO: Manejar el mensaje para mostrar el alert
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        loginResponse();
    }

    if (logged) {
        return (
            <>
                <Header handleSession={handleSession} />
                <ContentBody title="Inicio" content={'Bienvenido!'} />
            </>
        );
    }
    return (
        <Container className="login-container">
            <Row className="container-row align-items-center">
                <Col md={6} className="mx-auto d-flex justify-content-center">
                    <div className="myform form">
                        <div className="logo mb-1">
                            <div className="col-md-12 text-center">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicUser">
                                <Form.Label className="form-label">Usuario</Form.Label>
                                <Form.Control type="text" placeholder="usuario" value={user} name="txtUser" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPass">
                                <Form.Label className="form-label">Contraseña</Form.Label>
                                <Form.Control type="password" value={pass} name="txtPass" placeholder="contraseña" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3 text-center">
                                <Button variant="primary" type="submit" disabled={submitDisabled}>Iniciar Sesión</Button>
                            </Form.Group>
                            <div className="col-md-12">
                                <div className="login-or">
                                    <hr className="hr-or" />
                                    <span className="span-or">o</span>
                                </div>
                            </div>
                            <Form.Group className="mb-3 text-center">
                                <Button variant="secondary" type="button">Registrarse</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login