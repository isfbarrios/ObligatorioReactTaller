import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentBody({ title, content }) {
    return (
        <Container fluid className="pt-5 pb-3">
            <Row>
                <Col md={12} className="mx-auto">
                    <div className="home-page">
                        <div className="page-title">
                            <div className="logo">
                                <div className="col-md-12">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="page-content">
                            {content}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContentBody