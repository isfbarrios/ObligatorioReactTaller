import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function HomeLogo() {

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="home-form text-center">
                <Button variant="link" type="submit" title="Inicio">
                    <FontAwesomeIcon icon={faHouse} />
                </Button>
            </Form.Group>
        </Form>
    )
}

export default HomeLogo