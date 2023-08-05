import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { loadDepartments } from "../redux/features/departmentSlice";
import { loadCities } from "../redux/features/citySlice";
import { loadDepartmentsService, loadCitiesService } from "../services/services";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';

function ContentBody() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.user);

    useEffect(() => {
        const existApiKey = sessionUser.apikey.length > 0 ? true : localStorage.getItem('apiKey')?.length > 0 ? true : false;
        if (!existApiKey) {
            navigate("/login");
        }

        //Precarga de datos
        loadDepartamentos();
        loadCiudades();
    }, [])

    const loadDepartamentos = async () => {
        try {
            const response = await loadDepartmentsService(sessionUser.id, sessionUser.apikey);

            if (response.codigo === 200) {
                let deps = [];
                response.departamentos.forEach((dep) => {
                    let { id, nombre } = dep;
                    deps = [...deps, { id, nombre }];
                });
                dispatch(loadDepartments(deps));
            }
            else {
                //TODO: Manejar el mensaje para mostrar el alert
            }
        }
        catch (error) {
            alert(error);
        }
    }

    const loadCiudades = async () => {
        try {
            const response = await loadCitiesService(sessionUser.id, sessionUser.apikey);

            if (response.codigo === 200) {
                let cities = [];
                response.ciudades.forEach((city) => {
                    let { id, nombre, idDepartamento } = city;
                    cities = [...cities, { id, nombre, idDepartamento }];
                });
                dispatch(loadCities(cities));
            }
            else {
                //TODO: Manejar el mensaje para mostrar el alert
            }
        }
        catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default ContentBody