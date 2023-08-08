import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grafica from './Grafica';

function GraficaCensosDep() {

    const sessionCenso = useSelector((state) => state.censo);
    const sessionDepartment = useSelector((state) => state.department);

    const callback = (acc, val) => {
        if (acc[val.departamento]) {
            acc[val.departamento] = acc[val.departamento] + 1;
        } else {
            acc[val.departamento] = 1;
        }
        return acc;
    }

    const resultado = sessionCenso.reduce(callback, {});

    const cantCensados = Object.values(resultado);
    const departamentosId = Object.keys(resultado);

    const departamentosNombre = departamentosId?.map(
        e => {
            const dep = sessionDepartment?.find(d => d.id == e);
            return dep?.nombre;
        }
    )

    return (
        <>
            <Grafica etiquetas={departamentosNombre} datos={cantCensados}
                nombreGrafica="Censados por departamento"
                nombreDatos="Censos" />
        </>
    )
}

export default GraficaCensosDep