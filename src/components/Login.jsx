import { useState, useEffect, useRef } from 'react'
import { loginService } from "../services/services";
import { loadUser } from "../redux/features/userSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ContentBody from './ContentBody';
import Header from './Header';
import '../css/login.css';

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const userRef = useRef("");
    const passRef = useRef("");
    const sessionUser = useSelector((state) => state.user);
    const [alertType, setAlertType] = useState(false);
    const [alert, setAlert] = useState("");

    const cleanAlert = () => {
        setTimeout(() => {
            setAlert("");
            setAlertType(false);
        }, 4000);
    }

    //Cambio el estado del disabled del submit si ambos campos fueron completados
    const handleChange = () => {
        const user = userRef.current.value.trim();
        const pass = passRef.current.value.trim();
        setSubmitDisabled(user.length > 0 && pass.length > 0 ? false : true);
    }

    const loginResponse = async () => {
        const user = userRef.current.value.trim();
        const pass = passRef.current.value.trim();

        try {
            const response = await loginService(user, pass);
            if (response.codigo === 200) {
                dispatch(loadUser({ id: response.id, username: user, apikey: response.apiKey }));
                localStorage.setItem('userId', response.id);
                localStorage.setItem('username', user);
                localStorage.setItem('apikey', response.apiKey);
                navigate("/");
            }
            else {
                setAlert(response.mensaje.trim());
                setAlertType(true);
                cleanAlert();
            }
        }
        catch (error) {
            alert(error);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        loginResponse();
    }

    const onViewSubmit = (e) => {
        e.preventDefault();
        navigate('register');
    }

    if (sessionUser.logged) {
        return (
            <>
                <ContentBody />
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
                        <Alert
                            style={alert.length > 0 ? { visibility: "initial", marginBottom: "5px" } : { visibility: "hidden", marginBottom: "5px" }}
                            key={alertType ? 'success' : 'danger'}
                            variant={alertType ? 'success' : 'danger'}>{alert}
                        </Alert>
                        <Form onSubmit={onSubmit} onChange={handleChange}>
                            <Form.Group className="mb-3" controlId="formBasicUser">
                                <Form.Label className="form-label">Usuario</Form.Label>
                                <Form.Control type="text" ref={userRef} name="txtUser" placeholder="usuario" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPass">
                                <Form.Label className="form-label">Contraseña:</Form.Label>
                                <Form.Control type="password" ref={passRef} name="txtPass" placeholder="contraseña" autoComplete="on" />
                            </Form.Group>
                            <Form.Group className="mb-2 text-center">
                                <Button variant="primary" type="submit" disabled={submitDisabled}>Iniciar Sesión</Button>
                            </Form.Group>
                        </Form>
                        <div className="col-md-12">
                            <div className="login-or">
                                <hr className="hr-or" />
                                <span className="span-or">o</span>
                            </div>
                        </div>
                        <Form onSubmit={onViewSubmit}>
                            <Form.Group className="mb-2 mt-2 text-center">
                                <Button variant="secondary" type="submit">Registrarse</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login