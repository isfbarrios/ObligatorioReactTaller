import React from 'react'
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {

    const sessionUser = useSelector((state) => state.user);

    //let now = new Date();

    return (
        <>
            <Container fluid className="pt-5 pb-3" >
                <Row>
                    <Col md={12} className="mx-auto">
                        <div className="home-page">
                            <div className="page-title">
                                <div className="logo">
                                    <div className="col-md-12 py-1 px-3">
                                        <h4>Bienvenido {sessionUser.username}!</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="page-content">
                                Hora: asd
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home