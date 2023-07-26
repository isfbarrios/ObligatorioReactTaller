import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function HomeLogo() {
    return (
        <Form>
            <Form.Group className="home-form text-center">
                <Button variant="link" type="submit" title="Inicio">
                    <FontAwesomeIcon icon={faHouse} />
                </Button>
            </Form.Group>
        </Form>
    )
}

export default HomeLogo