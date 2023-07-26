import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function LogOut({ handleSession }) {

    const onSubmit = (e) => {
        e.preventDefault();
        handleSession(false, "");
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="logout-form text-center">
                <Button variant="link" className="a-mod" type="submit" title="Cerrar sesión">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </Button>
            </Form.Group>
        </Form>
    )
}

export default LogOut