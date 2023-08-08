import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { loadDepartments } from "../redux/features/departmentSlice";
import { loadCities } from "../redux/features/citySlice";
import { loadCenso } from "../redux/features/censoSlice";
import { loadOcupations } from "../redux/features/ocupationSlice";
import { loadDepartmentsService, loadCitiesService, loadOcupationsService, loadCensosService } from "../services/services";

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
        loadOcupaciones();
        loadCensos();
    }, [])

    const loadDepartamentos = async () => {
        try {
            const response = await loadDepartmentsService(sessionUser.id, sessionUser.apikey);

            if (response.codigo === 200) {
                let deps = [];
                response.departamentos.forEach((dep) => {
                    let { id, nombre, latitud, longitud } = dep;
                    deps = [...deps, { id, nombre, latitud, longitud }];
                });
                dispatch(loadDepartments(deps));
            }
            else {
                //TODO: Manejar el mensaje para mostrar el alert
            }
        }
        catch (error) {
            alert('ContentBody.loadDepartamentos ' + error);
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
            alert('ContentBody.loadCiudades ' + error);
        }
    }

    const loadOcupaciones = async () => {
        try {
            const response = await loadOcupationsService(sessionUser.id, sessionUser.apikey);

            if (response.codigo === 200) {
                dispatch(loadOcupations(response.ocupaciones));
            }
            else {
                //TODO: Manejar el mensaje para mostrar el alert
            }
        }
        catch (error) {
            alert('ContentBody.loadOcupaciones ' + error);
        }
    }

    const loadCensos = async () => {
        try {
            const response = await loadCensosService(sessionUser.id, sessionUser.apikey);

            if (response.codigo === 200) {
                dispatch(loadCenso(response.personas));
            }
            else {
                //TODO: Manejar el mensaje para mostrar el alert
            }
        }
        catch (error) {
            alert('ContentBody.loadOcupaciones ' + error);
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