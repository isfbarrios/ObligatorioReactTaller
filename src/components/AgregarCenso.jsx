import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from "../redux/features/userSlice";

import { insertPersonService } from "../services/services";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import Header from './Header';


function AgregarCenso() {

    const [alertType, setAlertType] = useState(false);
    const [alert, setAlert] = useState("");
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const nameRef = useRef("");
    const departmentRef = useRef("");
    const cityRef = useRef("");
    const birthdateRef = useRef("");
    const ocupationRef = useRef("");
    const sessionUser = useSelector((state) => state.user);
    const sessionDepartment = useSelector((state) => state.department);
    const sessionOcupation = useSelector((state) => state.ocupation);
    const sessionCity = useSelector((state) => state.city);
    const [cities, setCities] = useState();

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

    const onChange = (e) => {
        setValidated(false);
        const name = nameRef.current.value;
        const department = departmentRef.current.value;
        const city = cityRef.current.value;
        const birthdate = birthdateRef.current.value;
        const ocupation = ocupationRef.current.value;

        let deptAux = sessionDepartment.find(d => d.id == department);
        let cityAux = sessionCity.find(c => c.id == city);
        let ocupAux = sessionOcupation.find(o => o.id == ocupation);

        if (deptAux != undefined && deptAux != null
            && cityAux != undefined && cityAux != null
            && ocupAux != undefined && ocupAux != null
            && name.length > 0 && birthdate.length > 0) setValidated(true);
    }

    const registrarCenso = async (jsonObject) => {
        try {
            const response = await insertPersonService(sessionUser.id, sessionUser.apikey, jsonObject);

            if (response.codigo === 200) {
                setAlert(response.mensaje.trim());
                setAlertType(true);
            }
            else {
                setAlert(response.mensaje.trim());
            }
        }
        catch (error) {
            alert('AgregarCenso.registrarCenso.insertPerson ' + error);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const department = departmentRef.current.value;
        const city = cityRef.current.value;
        const birthdate = birthdateRef.current.value;
        const ocupation = ocupationRef.current.value;

        let jsonObject = {
            "idUsuario": sessionUser.id,
            "nombre": name.trim(),
            "departamento": department,
            "ciudad": city,
            "fechaNacimiento": birthdate,
            "ocupacion": ocupation
        }
        registrarCenso(jsonObject);

        setTimeout(() => {
            setAlert("");
            setAlertType(false);
        }, 5000);
    }

    return (
        <>
            <Alert
                style={alert.length > 0 ? { visibility: "initial", marginBottom: "5px" } : { visibility: "hidden", marginBottom: "5px" }}
                key={alertType ? 'success' : 'danger'}
                variant={alertType ? 'success' : 'danger'}>{alert}
            </Alert>
            <Form noValidate validated={validated} onSubmit={onSubmit} onChange={onChange}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label className="form-label">Nombre</Form.Label>
                    <Form.Control type="text" ref={nameRef} name="txtName" placeholder="John Doe" min="1" max="30" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, ingrese un nombre valido.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label className="form-label">Departamento</Form.Label>
                    <Form.Select ref={departmentRef} name="txtDepartment" onChange={handleChange} required>
                        <option value="-1">Seleccione un departamento</option>
                        {sessionDepartment?.map((dep) =>
                            <option value={dep.id} key={dep.id}>{dep.nombre}</option>
                        )}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Por favor, seleccione un departamento valido.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom03">
                    <Form.Label className="form-label">Ciudad</Form.Label>
                    <Form.Select ref={cityRef} name="txtCity" required>
                        <option value="-1">Seleccione una ciudad</option>
                        {cities?.map(city =>
                            <option value={city.id} key={city.id}>{city.nombre}</option>
                        )}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Por favor, seleccione una ciudad valida.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom04">
                    <Form.Label className="form-label">Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" ref={birthdateRef} name="txtBirthdate" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, seleccione una fecha valida.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom05">
                    <Form.Label className="form-label">Ocupaci&oacute;n</Form.Label>
                    <Form.Select ref={ocupationRef} name="txtOcupation" required>
                        <option value="-1">Seleccione una ocupaci&oacute;n</option>
                        {sessionOcupation?.map(ocupation =>
                            <option value={ocupation.id} key={ocupation.id}>{ocupation.ocupacion}</option>
                        )}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Por favor, seleccione una ocupaci&oacute;n valida.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 text-center">
                    <Button variant="secondary" type="submit" disabled={!validated}>Registrar censo</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default AgregarCenso