import Button from 'react-bootstrap/Button';
import { useNavigate, NavLink, Navigate } from "react-router-dom";

function PanelOption({ panelId, title, path }) {

    const navigate = useNavigate();

    return (
        <NavLink key={panelId} to={path}>{title}</NavLink>
    )
}

export default PanelOption