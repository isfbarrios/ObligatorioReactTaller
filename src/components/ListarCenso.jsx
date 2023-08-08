import React, { useState, useEffect, useRef } from 'react';
import { loadCenso, borrarCenso } from "../redux/features/censoSlice";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { deletePersonService } from "../services/services";

import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function ListarCenso() {

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.user);
    const sessionCenso = useSelector((state) => state.censo);
    const sessionOcupation = useSelector((state) => state.ocupation);
    const [alertType, setAlertType] = useState(false);
    const [alert, setAlert] = useState("");
    const filterRef = useRef("");
    const [censosList, setCensosList] = useState([...sessionCenso]);

    useEffect(() => {
        setCensosList([...sessionCenso]);
    }, [sessionCenso]);

    const onChange = () => {
        const id = parseInt(filterRef.current.value);
        setCensosList([...sessionCenso]);
        if (id !== -1) {
            setCensosList(censosList.filter(censo => censo.ocupacion === id));
        }
    }

    const removeCenso = async (id) => {
        try {
            const response = await deletePersonService(sessionUser.id, sessionUser.apikey, id);

            if (response.codigo === 200) {
                dispatch(borrarCenso(id));
                setAlert(response.mensaje.trim());
                setAlertType(true);
            }
            else {
                setAlert(response.mensaje.trim());
            }
        }
        catch (error) {
            alert('ListarCenso.removeCenso ' + error);
        }

        setTimeout(() => {
            setAlert("");
            setAlertType(false);
        }, 4000);
    }

    const handleRemove = (id) => removeCenso(id);

    return (
        <>
            <Alert
                style={alert.length > 0 ? { visibility: "initial", marginBottom: "5px" } : { visibility: "hidden", marginBottom: "5px" }}
                key={alertType ? 'success' : 'danger'}
                variant={alertType ? 'success' : 'danger'}>{alert}
            </Alert>
            <Form>
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label className="form-label">Ocupaci&oacute;n</Form.Label>
                    <Form.Select ref={filterRef} name="txtOcupation" onChange={onChange}>
                        <option value="-1">Seleccione una ocupaci&oacute;n</option>
                        {sessionOcupation?.map(ocupation =>
                            <option value={ocupation.id} key={ocupation.id}>{ocupation.ocupacion}</option>
                        )}
                    </Form.Select>
                </Form.Group>
            </Form>
            <Table striped bordered hover size="sm" className="text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre completo</th>
                        <th>Fecha de nacimiento</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        censosList == null || censosList.length == 0
                            ? <td colSpan="4">No hay datos para mostrar</td>
                            : censosList.map((censo) =>
                                <tr key={censo.id}>
                                    <td>{censo.id}</td>
                                    <td>{censo.nombre}</td>
                                    <td>{censo.fechaNacimiento}</td>
                                    <td>
                                        <Button key={censo.id} data-censoid={censo.id} variant="danger" title="Inicio" onClick={() => handleRemove(censo.id)}>
                                            Borrar censo <FontAwesomeIcon icon={faDeleteLeft} />
                                        </Button>
                                    </td>
                                </tr>)
                    }
                </tbody>
            </Table>
        </>
    )
}

export default ListarCenso