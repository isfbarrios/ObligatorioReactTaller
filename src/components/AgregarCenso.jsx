import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from "../redux/features/userSlice";
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';

function AgregarCenso() {

    const dispatch = useDispatch();
    const nameRef = useRef("");
    const departmentRef = useRef("");
    const cityRef = useRef("");
    const birthdateRef = useRef("");
    const ocupationRef = useRef("");
    const sessionUser = useSelector((state) => state.user);
    const sessionDepartment = useSelector((state) => state.department);
    const sessionCity = useSelector((state) => state.city);
    const [cities, setCities] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        //loginResponse();
    }

    useEffect(() => {
        if (localStorage.getItem('apikey') && sessionUser.apikey.length == 0) {
            const user = localStorage.getItem('username');
            const apikey = localStorage.getItem('apikey');
            dispatch(loadUser({ username: user, apikey: apikey }));
        }
    }, []);

    const handleChange = (e) => {
        setCities(sessionCity.filter(city => city.idDepartamento == departmentRef.current.value));
    }

    return (
        <>
            <Container fluid className="pt-5 pb-3" >
                <Row>
                    <Col md={12} className="mx-auto">
                        <div className="home-page">
                            <div className="page-title">
                                <div className="logo">
                                    <div className="col-md-12 py-1 px-3">
                                        <h4>Nuevo censo</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="page-content col-md-6">
                                <Form onSubmit={onSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label className="form-label">Nombre</Form.Label>
                                        <Form.Control type="text" ref={nameRef} name="txtName" placeholder="John Doe" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicDepartment">
                                        <Form.Label className="form-label">Departamento</Form.Label>
                                        <Form.Select ref={departmentRef} name="txtDepartment" onChange={handleChange}>
                                            <option value="-1">Seleccione un departamento</option>
                                            {sessionDepartment?.map((dep) =>
                                                <option value={dep.id}>{dep.nombre}</option>
                                            )}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCity">
                                        <Form.Label className="form-label">Ciudad</Form.Label>
                                        <Form.Select ref={cityRef} name="txtCity">
                                            <option value="-1">Seleccione una ciudad</option>
                                            {cities?.map(city =>
                                                <option value={city.id} data-depId={city.idDepartamento}>{city.nombre}</option>
                                            )}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicDate">
                                        <Form.Label className="form-label">Fecha de nacimiento</Form.Label>
                                        <Form.Control type="date" ref={birthdateRef} name="txtBirthdate" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicOcupation">
                                        <Form.Label className="form-label">Ocupaci&oacute;n</Form.Label>
                                        <Form.Select ref={ocupationRef} name="txtOcupation">
                                            <option value="-1">Seleccione una ocupaci&oacute;n</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3 text-center">
                                        <Button variant="secondary" type="button">Registrar censo</Button>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default AgregarCenso