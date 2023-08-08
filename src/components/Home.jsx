import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loadTotalCensadosService } from "../services/services";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function Home() {

    const sessionUser = useSelector((state) => state.user);
    const [censosAmount, setCensosAmount] = useState();
    const [censosPerc, setCensosPerc] = useState();
    const [censosM, setCensosM] = useState();
    const [censosI, setCensosI] = useState();
    const [tiempoRest, setTiempoRes] = useState();
    const sessionCenso = useSelector((state) => state.censo);
    const montevideoId = 3218;

    const fechaFin = new Date(2023, 7, 31);

    useEffect(() => {
        censosAmountResponse();

        let fechaAct = new Date();
        let diff = fechaFin.getTime() - fechaAct.getTime();

        setTiempoRes(parseInt(diff / 1000 / 60 / 60 / 24));
    }, []);

    const censosAmountResponse = async () => {
        try {
            const response = await loadTotalCensadosService(sessionUser.id, sessionUser.apikey);
            if (response.codigo === 200) {
                setCensosAmount(parseInt(response.total));
                let aux = 100 * (parseInt(sessionCenso.length)) / parseInt(censosAmount);
                setCensosPerc(isNaN(aux) ? 0 : aux);

                let censosMAux = sessionCenso.filter(c => c.departamento == montevideoId);
                let censosIAux = sessionCenso.filter(c => c.departamento != montevideoId);

                setCensosM(censosMAux.length);
                setCensosI(censosIAux.length);
            }
        }
        catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <Container fluid className="pt-5 pb-3" >
                <Row>
                    <Col md={6} className="mx-auto">
                        <div className="home-page home">
                            <div className="page-title">
                                <div className="logo">
                                    <div className="col-md-12 py-1 px-2">
                                        <h4>Bienvenido {sessionUser.username}!</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="page-content">
                                <p>Sistema de censo 2023.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="mx-auto">
                        <div className="home-page home">
                            <div className="page-title">
                                <div className="logo">
                                    <div className="col-md-12 py-1 px-2">
                                        <h4>Registros</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="page-content">
                                <ListGroup className="report-home">
                                    <ListGroup.Item className="report-home-item"><span>Montevideo</span><Badge bg="primary">{censosM}</Badge></ListGroup.Item>
                                    <ListGroup.Item className="report-home-item"><span>Interior</span><Badge bg="primary">{censosI}</Badge></ListGroup.Item>
                                </ListGroup>
                                <hr />
                                <span><b>Total de personas censadas:</b> {censosAmount}</span>
                                <br />
                                <span><b>Porcentaje de censados por ti: </b>%{parseFloat(censosPerc).toFixed(4)}</span>
                                <br />
                                <span><b>Fecha de finalizaci&oacute;n del censo: </b>{fechaFin.getDate() + '/' + (fechaFin.getMonth() + 1) + '/' + fechaFin.getFullYear()}</span>
                                <br />
                                <span><b>D&iacute;as restantes: </b>{tiempoRest}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Home