import React from 'react'
import AgregarCenso from './AgregarCenso'
import ListarCenso from './ListarCenso'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Censo() {
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
                                            <h4>Nuevo censo</h4>
                                            <hr />
                                        </div>
                                        <AgregarCenso />
                                    </Col>
                                    <Col md={6} className="mx-auto">
                                        <div className="py-1">
                                            <h4>Censos realizados</h4>
                                            <hr />
                                        </div>
                                        <ListarCenso />
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

export default Censo