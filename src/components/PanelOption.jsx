import Button from 'react-bootstrap/Button';
import { useNavigate, NavLink, Navigate } from "react-router-dom";

function PanelOption({ panelId, title, path }) {

    const navigate = useNavigate();

    return (
        <NavLink style={{ color: "white", textShadow: "1px 1px black", fontWeight: "bold", padding: "5px 10px" }} key={panelId} to={path}>{title}</NavLink>
    )
}

export default PanelOption