import { loadUser } from "../redux/features/userSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function LogOut() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(loadUser({ username: "", apikey: "" }));
        localStorage.clear();
        navigate("/login");
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