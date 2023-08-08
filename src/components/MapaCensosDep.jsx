import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Mapa from './Mapa';
import { useSelector } from 'react-redux';

function MapaCensosDep() {

    const sessionCenso = useSelector((state) => state.censo);
    const sessionDepartment = useSelector((state) => state.department);

    const callback = (acc, val) => {
        if (acc[val.departamento]) {
            acc[val.departamento] = acc[val.departamento] + 1;
        } else {
            acc[val.departamento] = 1;
        }
        return acc;
    }

    const resultado = sessionCenso.reduce(callback, {});

    const markersData = sessionDepartment.map(
        departamento => {
            if (resultado[departamento.id] != undefined) {
                return {
                    lat: departamento.latitud,
                    lng: departamento.longitud,
                    titulo: departamento.nombre,
                    contenido: `Total de censados: ${resultado[departamento.id]}.`
                }
            }
            else {
                return {
                    lat: departamento.latitud,
                    lng: departamento.longitud,
                    titulo: departamento.nombre,
                    contenido: 'No se realizaron censos aún.'
                }
            }
        }
    )

    return (
        <>
            <Container fluid className="pt-5 pb-3 map-container" >
                <Row>
                    <Col md={12} className="mx-auto">
                        <div className="home-page">
                            <div className="page-title">
                                <div className="logo">
                                    <div className="col-md-12 py-1 px-3">
                                        <h4>Mapa</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="page-content">
                                <div style={{ margin: '0 auto' }}>
                                    <Mapa markersData={markersData} />
                                </div >
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default MapaCensosDep