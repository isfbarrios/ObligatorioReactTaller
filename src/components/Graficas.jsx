import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import GraficaCensosDep from './GraficaCensosDep';
import GraficoPersonasOcup from './GraficoPersonasOcup';

function Graficas() {
    return (
        <>
            <Container fluid className="pt-5 pb-3" >
                <Row>
                    <Col md={12} className="mx-auto">
                        <div className="home-page">
                            <div className="page-title">
                                <div className="logo">
                                    <div className="col-md-12 py-1 px-3">
                                        <h4>Censos</h4>
                                    </div>
                                </div>
                            </div>
                            <Container fluid className="pt-5 pb-3" >
                                <Row>
                                    <Col md={6} className="mx-auto">
                                        <div className="py-1">
                                            <h4>Personas censadas por departamento</h4>
                                            <hr />
                                        </div>
                                        <GraficaCensosDep />
                                    </Col>
                                    <Col md={6} className="mx-auto">
                                        <div className="py-1">
                                            <h4>Personas censadas por ocupaci&oacute;n</h4>
                                            <hr />
                                            <GraficoPersonasOcup />
                                        </div>
                                    </Col>
                                </Row>
                            </Container >
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Graficas